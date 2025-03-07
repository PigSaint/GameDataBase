from flask_frozen import Freezer
from flask import send_from_directory
from app import app
import os

app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_BASE_URL'] = 'https://kenta2097.github.io/GameDataBase/'

freezer = Freezer(app)

@freezer.register_generator
def serve_static():
    static_dir = os.path.join(os.path.dirname(__file__), 'static')
    for root, _, files in os.walk(static_dir):
        for file in files:
            if file.endswith('.css') or file.endswith('.js'):
                rel_dir = os.path.relpath(root, static_dir)
                rel_file = os.path.join(rel_dir, file).replace('\\', '/')
                yield {'filename': rel_file}

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    freezer.freeze()
