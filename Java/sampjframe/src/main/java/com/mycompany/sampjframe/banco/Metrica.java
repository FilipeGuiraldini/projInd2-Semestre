
package com.mycompany.sampjframe.banco;

public class Metrica {
    private Integer idMetrica;
    private Double capturaMin;
    private Double capturaMax;

    public Metrica(Integer idMetrica, Double capturaMin, Double capturaMax) {
        this.idMetrica = idMetrica;
        this.capturaMin = capturaMin;
        this.capturaMax = capturaMax;
    }

    public Integer getIdMetrica() {
        return idMetrica;
    }

    public void setIdMetrica(Integer idMetrica) {
        this.idMetrica = idMetrica;
    }

    public Double getCapturaMin() {
        return capturaMin;
    }

    public void setCapturaMin(Double capturaMin) {
        this.capturaMin = capturaMin;
    }

    public Double getCapturaMax() {
        return capturaMax;
    }

    public void setCapturaMax(Double capturaMax) {
        this.capturaMax = capturaMax;
    }

    
}
