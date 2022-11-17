var medidaModel = require("../models/medidaModel");

function buscarMaquinas(req, res){
    medidaModel.buscarMaquinas().then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Não foram encontradas máquinas!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao tentar resgatar as esmáquinas! Erro: " + erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function listarMetricas(req, res){
    medidaModel.listarMetricas().then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Não foram encontradas métricas!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao tentar resgatar as máquinas! Erro: " + erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

/// recebendo a resposta do medida model
//
//
//
function buscarComponentesMaquina(req, res){

    var idEmpresa = req.params.idEmpresa;
    var idMaquina = req.params.idMaquina;

    medidaModel.buscarComponentesMaquina(idEmpresa, idMaquina).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Não foram encontrados componentes!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao tentar resgatar os componentes da máquina! Erro: " + erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

function buscarUltimosRegistros(req, res){

    const limite_linhas = 7;

    var idEmpresa = req.params.idEmpresa;
    var idMaquina = req.params.idMaquina;
    var fkComponente = req.params.fkComponente;

    medidaModel.buscarUltimosRegistros(idEmpresa, idMaquina, fkComponente, limite_linhas).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Não foram encontrados registros!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao tentar os últimos registros no controller! Erro: " + erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });

}

function buscarRegistroTempoReal(req, res){

    var idEmpresa = req.params.idEmpresa;
    var idMaquina = req.params.idMaquina;
    var fkComponente = req.params.fkComponente;

    medidaModel.buscarRegistroTempoReal(idEmpresa, idMaquina, fkComponente).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Não foram encontrados registros!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao tentar os últimos registros no controller! Erro: " + erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    }); 
}

function mediaUsoComponente(req, res){
    medidaModel.mediaUsoComponente().then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Não foram encontrados componentes para calculo da média!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao tentar resgatar a média do uso dos componentes! Erro: " + erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })
}

function buscarServidores(req, res) {

    var idEmpresa = req.body.idEmpresa;
    

    medidaModel.buscarServidores(idEmpresa)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta dos livros! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function infoMaquina(req, res){

    var idMaquina = req.params.idMaquina;

    medidaModel.infoMaquina(idMaquina).then(function (resultado){
        if(resultado.length > 0){
            res.status(200).json(resultado);
        }else{
            res.status(204).send("Não foram encontradas informações da maquina do idMaquina informado!");
        }
    }).catch(function (erro){
        console.log(erro);
        console.log("Houve um erro ao tentar resgatar a média do uso dos componentes! Erro: " + erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    })

}

function cadastrarMetrica(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // empresa ^^^^^^
    // usuario VVVVV
    // var fkEmpresa = req.body.fkEmpresaServer;
    
    var minimo = req.body.minimoServer;
    var maximo = req.body.maximoServer;
    var idEmpresa = req.body.idEmpresaServer;
    

    // Faça as validações dos valores
    if (minimo == undefined) {
        res.status(400).send("o valor mínimo está undefined!");
    } else if (maximo == undefined) {
        res.status(400).send("o valor máximo está undefined!");
    } else if (idEmpresa == undefined) {
        res.status(400).send("o Id da empresa está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.cadastrarMetrica(minimo, maximo, idEmpresa)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erroblé: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function atribuirMetrica(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    // empresa ^^^^^^
    // usuario VVVVV
    // var fkEmpresa = req.body.fkEmpresaServer;
    
    var idMaquina = req.body.idMaquinaServer;
    var nomeComponente = req.body.nomeComponenteServer;
    var idMetrica = req.body.idMetricaServer;
    

    // Faça as validações dos valores
    if (idMaquina == undefined) {
        res.status(400).send("o id da máquina está undefined!");
    } else if (nomeComponente == undefined) {
        res.status(400).send("o nome do componente está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        medidaModel.atribuirMetrica(idMaquina, nomeComponente, idMetrica)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a atribuição! Erroblé: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    buscarMaquinas,
    buscarUltimosRegistros,
    buscarComponentesMaquina,
    buscarRegistroTempoReal,
    mediaUsoComponente,
    buscarServidores,
    infoMaquina,
    cadastrarMetrica,
    atribuirMetrica,
    listarMetricas
    
    // buscarUltimasMedidas,
    // buscarMedidasEmTempoReal

}