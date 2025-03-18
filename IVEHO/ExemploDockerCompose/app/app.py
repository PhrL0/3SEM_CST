from flask import Flask,request, jsonify, render_template
import mysql.connector

#Cria uma instancia do Flask
app = Flask(__name__)

#Configurações do banco de dados MySQL
db_config = {
    'host': 'db',
    'user': 'root',
    'password': 'password',
    'database': 'cadastro_db'
}

#Rota principar: exibe o formulario
@app.route('/')
def index():
    return render_template('index.html')

#Rota para cadastrar usuarios
@app.route('/cadastrar', methods=[ 'GET','POST'])
def cadastrar():
    #Obtem os dados do formulário
    data = request.json
    nome = data['name']
    email = data['email']

    try: 
        #Conecta ao banco de dados
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor()

        #Insere os dados no banco de dados
        cursor.execute("INSERT INTO usuarios(nome,email) VALUES (%s,%s)", (nome,email))
        conn.commit() #Confirma a transação

        #Fecha a conexão
        cursor.close()
        conn.close()

        return jsonify({"message": "Cadastro realizado com sucesso!"}), 200

    except Exception as e:
        #Retorna uma mensagem de erro
        return jsonify({'message': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
