import json
from erpDAO import ErpDAO

class ErpController:
    
    def __init__(self):
        self.dao = ErpDAO()
           
    def controllerSelectAccounts(self):
        return self.dao.findAllAccounting()
        
    def controllerSelectShopping(self):
        return self.dao.findAllShopping()
    
    def controllerSelectPCP(self):
        return self.dao.findAllPCP()
        
        
    