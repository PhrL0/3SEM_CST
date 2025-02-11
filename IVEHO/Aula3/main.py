from flask import Flask,jsonify
from flask_cors import CORS
import random
import mysql.connector

conexao = mysql.connector.connect(
    host = 'localhost',
    user = 'root',
    password = '123456',
    database = 'bd_flask'
)

cursor = conexao.cursor()



app = Flask(__name__)

CORS(app)

def insertSQL(tensao,corrente,pressao,temperatura,umidade):
    comando = 'INSERT INTO dados (tensao, corrente, pressao, temperatura, umidade) VALUES (%s, %s, %s, %s, %s)'
    cursor.execute(comando, (tensao, corrente, pressao, temperatura, umidade))
    conexao.commit()


def getSensorData():
    temperatura = round(random.uniform(20,80),2)
    umidade = round(random.uniform(30,90),2)
    pressao = round(random.uniform(900,1100),2)
    corrente = round(random.uniform(30,100),2)
    tensao = round(random.uniform(180, 250), 2)
    alerta = ''

    if temperatura >= 65:
        alerta = "Critico"
    else:
        alerta = "Normal"

    insertSQL(str(tensao),str(corrente),str(pressao),str(temperatura),str(umidade))
    return {
        "temperatura":temperatura,
        "umidade":umidade,
        "pressao":pressao,
        "corrente":corrente,
        "tensao": tensao,
        "estado": alerta
    }

@app.route('/sensores',methods=['GET'])
def sensores():
    return jsonify(getSensorData())


if __name__ == '__main__':
    app.run(debug=True)

