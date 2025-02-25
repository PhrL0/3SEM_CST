import sqlite3

# Conectar ao banco de dados (ou criar se não existir)
conn = sqlite3.connect('erp.db')
cursor = conn.cursor()

# Criar tabelas
cursor.executescript('''
CREATE TABLE IF NOT EXISTS Contabilidade (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    descricao TEXT NOT NULL,
    tipo TEXT CHECK(tipo IN ('Receita', 'Despesa')) NOT NULL,
    valor REAL NOT NULL,
    data DATE NOT NULL,
    categoria TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS Compras (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fornecedor TEXT NOT NULL,
    produto TEXT NOT NULL,
    quantidade INTEGER NOT NULL,
    preco_unitario REAL NOT NULL,
    data_compra DATE NOT NULL,
    status TEXT CHECK(status IN ('Pendente', 'Aprovado', 'Recebido')) NOT NULL
);

CREATE TABLE IF NOT EXISTS PCP (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    produto TEXT NOT NULL,
    quantidade_planejada INTEGER NOT NULL,
    quantidade_produzida INTEGER DEFAULT 0,
    data_inicio DATE NOT NULL,
    data_fim DATE,
    status TEXT CHECK(status IN ('Planejado', 'Em Produção', 'Finalizado')) NOT NULL
);
''')

# Salvar alterações e fechar conexão
conn.commit()
conn.close()

print("Banco de dados e tabelas criados com sucesso!")
