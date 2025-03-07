from flask_frozen import Freezer
from app import app
import os

app.config['FREEZER_RELATIVE_URLS'] = False
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_BASE_URL'] = 'https://kenta2097.github.io/GameDataBase/'

# Añadir configuración para archivos estáticos
app.config['FREEZER_STATIC_IGNORE'] = ['.gitignore']

freezer = Freezer(app)

# Modificar el generador de URLs estáticas
@freezer.register_generator
def static_files():
    static_dir = os.path.join(os.path.dirname(__file__), 'static')
    for root, dirs, files in os.walk(static_dir):
        for file in files:
            if not file.startswith('.'):
                relative_path = os.path.relpath(os.path.join(root, file), static_dir)
                yield {'filename': relative_path}

if __name__ == '__main__':
    freezer.freeze()
