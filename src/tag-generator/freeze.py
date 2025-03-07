from flask_frozen import Freezer
from app import app

app.config['FREEZER_RELATIVE_URLS'] = True
app.config['FREEZER_DESTINATION'] = 'build'
app.config['FREEZER_BASE_URL'] = 'https://kenta2097.github.io/GameDataBase/'  # Actualiza con tu usuario

freezer = Freezer(app)

if __name__ == '__main__':
    freezer.freeze()
