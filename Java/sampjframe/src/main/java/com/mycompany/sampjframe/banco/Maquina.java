/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.sampjframe.banco;

import java.util.Random;

/**
 *
 * @author Wind
 */

public class Maquina {
    
    private Integer idMaquina;
    private String serialMaquina;
    private String nome;
    private Integer fkEmpresa;
    private Integer serial;


    public Integer getIdMaquina() {
        return idMaquina;
    }

    public void setIdMaquina(Integer idMaquina) {
        this.idMaquina = idMaquina;
    }

    public String getSerialMaquina() {
        return serialMaquina;
    }

    public void setSerialMaquina(String serialMaquina) {
        this.serialMaquina = serialMaquina;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getFkEmpresa() {
        return fkEmpresa;
    }

    public void setFkEmpresa(Integer fkEmpresa) {
        this.fkEmpresa = fkEmpresa;
    }
    
    public void gerarSerial(){
        Random gerador = new Random();
        this.serial = gerador.nextInt(999999999 - 100000000) + 100000000;
        setSerialMaquina(String.format("BRJ"+serial));
    }
    
}
