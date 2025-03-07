from flask_frozen import Freezer
from app import app

app.config['FREEZER_RELATIVE_URLS'] = False
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_BASE_URL'] = 'https://kenta2097.github.io/GameDataBase/'

# Asegurarse de que los archivos estáticos se copien correctamente
def fix_static_url():
    return ['/static/css/styles.css', '/static/js/main.js']

freezer = Freezer(app)
freezer.register_generator(fix_static_url)

if __name__ == '__main__':
    freezer.freeze()
