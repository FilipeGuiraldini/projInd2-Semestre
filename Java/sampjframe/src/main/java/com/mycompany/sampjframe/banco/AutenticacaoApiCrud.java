
package com.mycompany.sampjframe.banco;
import java.util.List;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
    
    
public class AutenticacaoApiCrud {

    
      private JdbcTemplate jbdcTemplate;
      AutenticacaoApi autenticacaoApi = new AutenticacaoApi();
      public AutenticacaoApi selecionar(String email, String senha, String serial){
         
     
        
        
        Conexao conexao = new Conexao();
        JdbcTemplate cursor = conexao.getConnection();
        
      List <AutenticacaoApi> checagem = cursor.query(String.format("SELECT * FROM AutenticacaoApi WHERE emailUsuario LIKE '%s' AND senha = HashBytes('MD5', '%s') AND serialMaquina LIKE '%s'",email, senha, serial), new BeanPropertyRowMapper(AutenticacaoApi.class));
          for (AutenticacaoApi autenticacaoApi : checagem) {
              return autenticacaoApi;
          }
          return null;
    }
}
