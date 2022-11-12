create database dadosAPI;
use dadosAPI;
create table cpuDados(
idCpu int primary key auto_increment,
registro double,
hora datetime
);

create table ramDados(
idRam int primary key auto_increment,
registro double,
hora datetime
);

create table tempDados(
idTemp int primary key auto_increment,
registro double,
hora datetime
);

create table discDados(
idDisc int primary key auto_increment,
registro double,
hora datetime
);
 
select * from cpuDados;