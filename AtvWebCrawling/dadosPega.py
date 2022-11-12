from re import S
import pymysql
import psutil as ps
from time import sleep

conexao = pymysql.connect(host='localhost',user='aluno',password='sptech',database='dadosAPI')
cursor = conexao.cursor() 
ativo = True


while (ativo) :
    percentCpu = ps.cpu_percent(1)
    cursor.execute(f"insert into cpuDados values (null, {percentCpu}, now());")
    percentRam = ps.virtual_memory().percent
    cursor.execute(f"insert into ramDados values (null, {percentRam}, now());")
    percentDiscKB = ps.disk_usage('/').used
    percentDiscGB = percentDiscKB /1024/1024/1024;
    cursor.execute(f"insert into discDados values (null, {percentDiscGB}, now());")
    conexao.commit()
    

    

