var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/resgatarMaquinas", function(req, res){
    medidaController.buscarMaquinas(req, res);
});

router.get("/mediaUsoComponente", function(req, res){
    medidaController.mediaUsoComponente(req, res);
});

router.get("/buscarComponentesMaquina/:idEmpresa/:idMaquina", function (req, res){
    medidaController.buscarComponentesMaquina(req, res);
});

router.get("/infoMaquina/:idMaquina", function(req, res){
    medidaController.infoMaquina(req, res);
});
     
// Recebe o ultimo registro do medidaController pela variavel res
router.get("/ultimosRegistros/:idEmpresa/:idMaquina/:fkComponente", function (req, res){
    medidaController.buscarUltimosRegistros(req, res);
});

router.get("/registrosTempoReal/:idEmpresa/:idMaquina/:fkComponente", function(req, res){
    medidaController.buscarRegistroTempoReal(req, res);
});

router.get("/ultimas/:idAquario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/listarMetricas", function (req, res) {
    medidaController.listarMetricas(req, res);
})

router.post("/buscarServidores", function (req, res) {
    medidaController.buscarServidores(req, res);
})

router.post("/cadastrarMetrica", function (req, res) {
    medidaController.cadastrarMetrica(req, res);
})

router.post("/atribuirMetrica", function (req, res) {
    medidaController.atribuirMetrica(req, res);
})

module.exports = router;