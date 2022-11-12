/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.sampjframe.banco;
import com.mycompany.sampjframe.banco.Conexao;
import com.mycompany.sampjframe.banco.Dados;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author Wind
 */
public class DadosCrud {
    
    private JdbcTemplate jbdcTemplate;
    Conexao conexao = new Conexao();
    JdbcTemplate cursor = conexao.getConnection();
    
    public void inserirDados(Dados dados){
        cursor.update("INSERT INTO Dados (registro, momento, fkComponente) VALUES (?, ?, ?)",
                            dados.getRegistro(), dados.getMomento(), dados.getFkComponente());
    }
    
}
