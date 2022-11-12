/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.sampjframe.banco;

import org.apache.commons.dbcp2.BasicDataSource;
import org.springframework.jdbc.core.JdbcTemplate;

/**
 *
 * @author Wind
 */
public class Conexao {
    
    private JdbcTemplate conexao;
    
    public Conexao() {
        BasicDataSource dataSource = new BasicDataSource();

//        //Conexão MySQL Local
//        dataSource​.setDriverClassName("com.mysql.cj.jdbc.Driver");
//
//        dataSource​.setUrl("jdbc:mysql://localhost:3306/SAMP");
//
//        dataSource​.setUsername("user_atividePI");
//
//        dataSource​.setPassword("sptech");


        //Conexão Azure
        dataSource.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        
//        dataSource.setUrl("jdbc:sqlserver://projetosamp.database.windows.net/SAMP");
        
        dataSource.setUrl("jdbc:sqlserver://projetosamp.database.windows.net;database=SAMP;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;");
        
        dataSource.setUsername("adminsamp");
        
        dataSource.setPassword("Projetosamp3");

        this.conexao = new JdbcTemplate(dataSource);
    }
    
    public JdbcTemplate getConnection() {
        return conexao;
    }
    
}
