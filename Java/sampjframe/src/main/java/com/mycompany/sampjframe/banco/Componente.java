
package com.mycompany.sampjframe.banco;
public class Componente {
    private Integer idComponente;
    private String nomeComponente;
    private Double tamanho;
    private Integer fkMaquina;
    private Integer fkMetrica;
    private Integer fkMedida;

    public Componente(Integer idComponente, String nomeComponente, Double capacidadeMaxima, Integer fkMaquina, Integer fkMetrica, Integer fkMedida) {
        this.idComponente = idComponente;
        this.nomeComponente = nomeComponente;
        this.tamanho = capacidadeMaxima;
        this.fkMaquina = fkMaquina;
        this.fkMetrica = fkMetrica;
        this.fkMedida = fkMedida;
    }
    
    public Componente(){
        
    }

    
    public Integer getIdComponente() {
        return idComponente;
    }

    public void setIdComponente(Integer idComponente) {
        this.idComponente = idComponente;
    }

    public String getNomeComponente() {
        return nomeComponente;
    }

    public void setNomeComponente(String nomeComponente) {
        this.nomeComponente = nomeComponente;
    }

    public Double getTamanho() {
        return tamanho;
    }

    public void setCapacidadeMaxima(Double tamanho) {
        this.tamanho = tamanho;
    }

    public Integer getFkMaquina() {
        return fkMaquina;
    }

    public void setFkMaquina(Integer fkMaquina) {
        this.fkMaquina = fkMaquina;
    }

    public Integer getFkMetrica() {
        return fkMetrica;
    }

    public void setFkMetrica(Integer fkMetrica) {
        this.fkMetrica = fkMetrica;
    }

    public Integer getFkMedida() {
        return fkMedida;
    }

    public void setFkMedida(Integer fkMedida) {
        this.fkMedida = fkMedida;
    }
    
    
}
