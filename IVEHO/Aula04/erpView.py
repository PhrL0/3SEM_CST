from flask import Flask, jsonify
from flask_cors import CORS
from erpController import ErpController


manager = ErpController()

app = Flask(__name__)
CORS(app)

@app.route('/getContabilidade', methods=['GET'])
def get_contabilidade():
    return jsonify(manager.controllerSelectAccounts())

@app.route('/getPCP',methods=['GET'])
def get_pcp():
    return jsonify(manager.controllerSelectPCP())

@app.route('/getCompras',methods=['GET'])
def get_compras():
    return jsonify(manager.controllerSelectShopping())


if __name__ == "__main__":
    app.run(debug=True,host='10.110.12.85',port=8000)
