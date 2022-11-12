
package com.mycompany.sampjframe.banco;


public class Medida {
    private Integer idMedida;
    private String unidadeMedida;

    public Medida(Integer idMedida, String unidadeMedida) {
        this.idMedida = idMedida;
        this.unidadeMedida = unidadeMedida;
    }
    
    public Integer getIdMedida() {
        return idMedida;
    }

    public void setIdMedida(Integer idMedida) {
        this.idMedida = idMedida;
    }

    public String getUnidadeMedida() {
        return unidadeMedida;
    }

    public void setUnidadeMedida(String unidadeMedida) {
        this.unidadeMedida = unidadeMedida;
    }
    
}
