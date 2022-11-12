from json import loads
from time import sleep
from urllib3 import PoolManager
import pymysql

conexao = pymysql.connect(host='localhost',user='aluno',password='sptech',database='dadosAPI')
cursor = conexao.cursor() 

def conversor(valor):
    return float(valor[0:4].replace(",", '.'))

with PoolManager() as pool:
    while True:
        response = pool.request('GET', 'http://localhost:8085/data.json')
        data = loads(response.data.decode('utf-8'))
        temp_value = data['Children'][0]['Children'][1]['Children'][1]['Children'][0]['Value']
        print(conversor(temp_value))
        tempCpu = conversor(temp_value)
        cursor.execute(f"insert into tempDados values (null, {tempCpu}, now());")
        conexao.commit()
        sleep(1)

    