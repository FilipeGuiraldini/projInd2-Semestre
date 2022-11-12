/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.sampjframe.banco;

import com.mycompany.sampjframe.banco.Componente;
import com.mycompany.sampjframe.banco.Conexao;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author Danylo Dias Gomes
 */
public class ComponenteCrud {
    
    private JdbcTemplate jbdcTemplate;
    Conexao conexao = new Conexao();
    JdbcTemplate cursor = conexao.getConnection();
    
    public void inserirComponente(Componente componente){
        cursor.update("INSERT INTO Componente (nomeComponente, tamanho, fkMaquina, fkMetrica, fkMedida) VALUES (?, ?, ?, ?, ?)",
                componente.getNomeComponente(), componente.getTamanho(), componente.getFkMaquina(), componente.getFkMetrica(), componente.getFkMedida());
    }
    
    public List <Componente> listarFkComponenteMaquina(Integer idMaquina){
        List <Componente> listaComponente;
        listaComponente = cursor.query(String.format("SELECT * FROM Componente WHERE fkMaquina = %d", idMaquina), new BeanPropertyRowMapper(Componente.class));
        return listaComponente;
    }
    
    public List <Componente> listarCpuMaquina(Integer idMaquina){
        List <Componente> listaComponente;
        listaComponente = cursor.query(String.format("SELECT * FROM Componente WHERE fkMaquina = %d AND nomeComponente LIKE 'CPU%%'", idMaquina), new BeanPropertyRowMapper(Componente.class));
        return listaComponente;
    }
    
    public List <Componente> listarRamMaquina(Integer idMaquina){
        List <Componente> listaComponente;
        listaComponente = cursor.query(String.format("SELECT * FROM Componente WHERE fkMaquina = %d AND nomeComponente LIKE 'RAM'", idMaquina), new BeanPropertyRowMapper(Componente.class));
        return listaComponente;
    }
    
    public List <Componente> listarTempMaquina(Integer idMaquina) {
        List <Componente> listaComponente;
        listaComponente = cursor.query(String.format("SELECT * FROM Componente WHERE fkMaquina = %d AND nomeComponente LIKE 'Temperatura'", idMaquina), new BeanPropertyRowMapper(Componente.class));
        return listaComponente;
    }
    
    public List <Componente> listarDiscosMaquina(Integer idMaquina){
        List <Componente> listaComponente;
        listaComponente = cursor.query(String.format("SELECT * FROM Componente WHERE fkMaquina = %d AND nomeComponente LIKE 'Disco%%'", idMaquina), new BeanPropertyRowMapper(Componente.class));
        return listaComponente;
    }
    
}
