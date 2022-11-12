cpu <- cpuDados$registro
disc <- discDados$registro
ram <- ramDados$registro
temp <- tempDados$registro

cpuS1 <- sample(cpu, 200)
cpuS2 <- sample(cpu, 200)
cpuS3 <- sample(cpu, 200)
cpuS4 <- sample(cpu, 200)

discS1 <- sample(disc, 200)
discS2 <- sample(disc, 200)
discS3 <- sample(disc, 200)
discS4 <- sample(disc, 200)

ramS1 <- sample(ram, 200)
ramS2 <- sample(ram, 200)
ramS3 <- sample(ram, 200)
ramS4 <- sample(ram, 200)

tempS1 <- sample(temp, 200)
tempS2 <- sample(temp, 200)
tempS3 <- sample(temp, 200)
tempS4 <- sample(temp, 200)

dados <- c(#Variavel aqui)
variacaoDados <- dados - mean(dados)
variacaoDados <- variacaoDados ^ 2
variancia <- mean(variacaoDados)
round(var(dados),2)
round(variancia,2)
desvio <- sqrt(variancia)
round(sd(dados),2)
round(desvio,2)
round(mean(dados),2)

