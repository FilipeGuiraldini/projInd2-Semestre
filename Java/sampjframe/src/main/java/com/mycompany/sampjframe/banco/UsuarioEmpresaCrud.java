/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.sampjframe.banco;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author Danylo Dias Gomes
 */
public class UsuarioEmpresaCrud {
    
    private JdbcTemplate jbdcTemplate;
    UsuarioEmpresa usuarioEmpresa = new UsuarioEmpresa();
    public UsuarioEmpresa validarLogin(String email, String senha){
        Conexao conexao = new Conexao();
        JdbcTemplate cursor = conexao.getConnection();
        
        List <UsuarioEmpresa> retorno = cursor.query(String.format("SELECT * FROM UsuarioEmpresa WHERE emailUsuario LIKE '%s' AND senha = HashBytes('MD5', '%s')", email, senha), new BeanPropertyRowMapper(UsuarioEmpresa.class));
        for(UsuarioEmpresa usuarioEmpresa : retorno){
            return usuarioEmpresa;
        }
        return null;
    }
    
}
