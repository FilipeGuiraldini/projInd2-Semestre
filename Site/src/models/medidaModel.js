var database = require("../database/config");

function buscarMaquinas(){
    var query = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        // ADAPTAR

        query = `SELECT * FROM Maquina;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        query = `SELECT * FROM Maquina;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function listarMetricas(){
    var query = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        // ADAPTAR

        query = `SELECT * FROM metrica;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        query = `SELECT * FROM metrica;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function buscarServidores(idEmpresa){
    var query = ``;

    if(process.env.AMBIENTE_PROCESSO == "producao") {
        query = `SELECT * FROM Maquina WHERE fkEmpresa = ${idEmpresa};`;
    }else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        query = `SELECT * FROM Maquina WHERE fkEmpresa = ${idEmpresa};`;
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function buscarComponentesMaquina(idEmpresa, idMaquina){
    var query = ``;

    if(process.env.AMBIENTE_PROCESSO == "producao") {
        //TALVEZ PRECISE ADAPTAR
        query = `SELECT fkComponente FROM DadosServidor WHERE idMaquina = ${idMaquina} AND idEmpresa = ${idEmpresa} GROUP BY fkComponente;`;
    }else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        query = `SELECT fkComponente FROM DadosServidor WHERE idMaquina = ${idMaquina} AND idEmpresa = ${idEmpresa} GROUP BY fkComponente;`;
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}
// Começa aqui, pega todos os dados dos ultimos registros inclusive a TEMPERATURA
//
//
//
//
//
//
//
function buscarUltimosRegistros(idEmpresa, idMaquina, fkComponente, limite_linhas) {

    var query = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        // ADAPTAR SE PRECISAR
        query = `SELECT TOP ${limite_linhas} * FROM DadosServidor 
        WHERE idEmpresa = ${idEmpresa} AND idMaquina = ${idMaquina} AND fkComponente = ${fkComponente} ORDER BY idRegistro;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        query = `SELECT * FROM DadosServidor 
                    WHERE idEmpresa = ${idEmpresa} AND idMaquina = ${idMaquina} AND fkComponente = ${fkComponente} ORDER BY idRegistro LIMIT ${limite_linhas};`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function buscarRegistroTempoReal(idEmpresa, idMaquina, fkComponente) {

    var query = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        // ADAPTAR SE PRECISAR
        query = `SELECT TOP 1 * FROM DadosServidor 
            WHERE idEmpresa = ${idEmpresa} AND idMaquina = ${idMaquina} AND fkComponente = ${fkComponente} ORDER BY idRegistro DESC`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        query = `SELECT * FROM DadosServidor 
                    WHERE idEmpresa = ${idEmpresa} AND idMaquina = ${idMaquina} AND fkComponente = ${fkComponente} ORDER BY idRegistro DESC LIMIT 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function mediaUsoComponente(){
    var query = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        // ADAPTAR

        query = `SELECT * FROM MediaUsoComponente;`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        query = `SELECT * FROM MediaUsoComponente;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);
}

function infoMaquina(idMaquina){
    var query = '';

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        query = `SELECT * FROM InfoMaquina WHERE idMaquina = ${idMaquina}`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        query = `SELECT * FROM InfoMaquina WHERE idMaquina = ${idMaquina}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + query);
    return database.executar(query);

}

function cadastrarMetrica(minimo, maximo, idEmpresa) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    var instrucao = ``;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
            INSERT INTO Metrica (capturaMin, capturaMax) VALUES ('${minimo}','${maximo}');
        `;
    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
            INSERT INTO Metrica (capturaMin, capturaMax) VALUES ('${minimo}','${maximo}');        
        `;
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atribuirMetrica(idMaquina, nomeComponente, idMetrica) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():");

    var instrucao = ``;

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucao = `
        update componente set fkMetrica = ${idMetrica} where fkMaquina = ${idMaquina} and nomeComponente like '${nomeComponente}%';

        `;
    }else if(process.env.AMBIENTE_PROCESSO == "desenvolvimento"){
        instrucao = `
        update componente set fkMetrica = ${idMetrica} where fkMaquina = ${idMaquina} and nomeComponente like '${nomeComponente}%';
       
        `;
    }else{
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top ${limite_linhas}
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,  
//                         momento,
//                         FORMAT(momento, 'HH:mm:ss') as momento_grafico
//                     from medida
//                     where fk_aquario = ${idAquario}
//                     order by id desc`;
//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     from medida
//                     where fk_aquario = ${idAquario}
//                     order by id desc limit ${limite_linhas}`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

// function buscarMedidasEmTempoReal(idAquario) {

//     instrucaoSql = ''

//     if (process.env.AMBIENTE_PROCESSO == "producao") {
//         instrucaoSql = `select top 1
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,  
//                         CONVERT(varchar, momento, 108) as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc`;

//     } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
//         instrucaoSql = `select 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         from medida where fk_aquario = ${idAquario} 
//                     order by id desc limit 1`;
//     } else {
//         console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
//         return
//     }

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }


module.exports = {
    buscarMaquinas,
    buscarComponentesMaquina,
    buscarUltimosRegistros,
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
