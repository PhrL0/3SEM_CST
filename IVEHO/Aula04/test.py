from erpController import ErpController
from erpDAO import ErpDAO


manager = ErpController()

result = manager.controllerSelectAccounts()

for i in result:
    print(i)
