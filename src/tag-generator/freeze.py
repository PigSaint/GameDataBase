from flask_frozen import Freezer
from flask import url_for
from app import app
import os

app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_BASE_URL'] = 'https://kenta2097.github.io/GameDataBase/'

freezer = Freezer(app)

@freezer.register_generator
def static():
    # Generar URLs para archivos CSS
    yield 'static', {'filename': 'css/styles.css'}
    # Generar URLs para archivos JS
    yield 'static', {'filename': 'js/main.js'}

if __name__ == '__main__':
    freezer.freeze()
