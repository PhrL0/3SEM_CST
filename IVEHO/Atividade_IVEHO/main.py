from flask import Flask, jsonify
from flask_cors import CORS
import random
import requests

app = Flask(__name__)
CORS(app)

def sensorData():
    temperatura = round(random.uniform(20, 80), 2)
    umidade = round(random.uniform(30, 90), 2)
    presenca = random.randint(0, 1)
    tensao = round(random.uniform(180, 250), 2)

    return {
        "temperatura": temperatura,
        "umidade": umidade,
        "presenca": presenca,
        "tensao": tensao
    }

def sendDataSpeak(dados):
    API_KEY = "K5IOFXEZ6RUQADG5" 
    url = "https://api.thingspeak.com/update"

    payload = {
        "api_key": API_KEY,
        "field1": dados["temperatura"],
        "field2": dados["umidade"],
        "field3": dados["presenca"],
        "field4": dados["tensao"]
    }

    response = requests.post(url, data=payload)

    if response.status_code == 200:
        print("✅ Dados enviados com sucesso! Entry ID:", response.text)
    else:
        print("❌ Erro ao enviar:", response.status_code, response.text)

@app.route("/dados",methods=['GET'])
def dados():
    dados = sensorData()
    sendDataSpeak(dados)
    return jsonify(sensorData())



if __name__ == "__main__":
   app.run(host="0.0.0.0", port=5000)
