import sqlite3

class ErpDAO:
    def __init__(self, db_name="erp.db"):
        self.db_name = db_name

    def findAllAccounting(self):
        try:
            with sqlite3.connect(self.db_name) as conn:
                cursor = conn.cursor()
                cursor.execute('''SELECT * FROM Contabilidade''')
                result = cursor.fetchall()
                return result
        except sqlite3.Error as e:
            print(f"Erro ao buscar dados contabilidade: {e}")
            return None

    def findAllShopping(self):
        try:
            with sqlite3.connect(self.db_name) as conn:
                cursor = conn.cursor()
                cursor.execute('''SELECT * FROM Compras''')
                result = cursor.fetchall()
                return result
        except sqlite3.Error as e:
            print(f"Erro ao encontrar dados Compras: {e}")
            return None
        
    def findAllPCP(self):
        try:
            with sqlite3.connect(self.db_name) as conn:
                cursor = conn.cursor()
                cursor.execute('''SELECT * FROM PCP''')
                result = cursor.fetchall()
                return result
        except sqlite3.Error as e:
            print(f'Erro ao buscar dados PCP: {e}')
            return None