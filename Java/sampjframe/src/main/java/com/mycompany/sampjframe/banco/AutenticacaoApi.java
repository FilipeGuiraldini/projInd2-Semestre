
package com.mycompany.sampjframe.banco;

public class AutenticacaoApi {
    private Integer idMaquina;
    private String emailUsuario;
    private String senha;
    private String serialMaquina;

    public AutenticacaoApi() {
        this.idMaquina = idMaquina;
        this.emailUsuario = emailUsuario;
        this.senha = senha;
        this.serialMaquina = serialMaquina;
    }
    
    public Integer getIdMaquina() {
        return idMaquina;
    }

    public void setIdMaquina(Integer idMaquina) {
        this.idMaquina = idMaquina;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getSerialMaquina() {
        return serialMaquina;
    }

    public void setSerialMaquina(String serialMaquina) {
        this.serialMaquina = serialMaquina;
    }
    
    
    
    
}
