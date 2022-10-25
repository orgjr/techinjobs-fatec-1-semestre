CREATE TABLE Vagas (
	id_vaga int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(50),
    resumo varchar(2048),
    cargo varchar(512),
    qtd_vagas smallint,
    salario_min decimal(15,2),
    salario_max decimal(15,2),
    beneficios varchar(2048),
    localizacao varchar(100),
    atividades varchar(2048),
    requisitos varchar(2048),
    diferenciais varchar(2048),
    id_empresa int
);

CREATE TABLE Usuarios (
	id_usuario int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    senha varbinary(50),
    nome varchar(50),
    sobrenome varchar(100),
    data_nascimento date,
    email varchar(50),
    celular varchar(15),
    endereco varchar(100),
    cidade varchar(100),
    uf varchar(2)
);

CREATE TABLE Empresas (
	id_empresa int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    senha varbinary(50),
    nome varchar(50),
    razao_social varchar(100),
    qtd_funcionarios int,
    email varchar(50),
    site varchar(50),
    cnpj varchar(50),
    endereco varchar(100),
    cidade varchar(100),
    uf varchar(2)
);

CREATE TABLE Cursos (
	id_curso int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    titulo varbinary(50),
    descricao varchar(50),
    id_empresa int
);

CREATE TABLE Curriculos (
	id_curriculo int UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    objetivo varchar(1024),
    experiencia varchar(65535),
    formacao varchar(65535),
    cursos varchar(65535),
    pretencao_salarial decimal(15,2),
    competencias varchar(65535),
    idiomas varchar(1024),
    info_complementar varchar(65535),
    id_usuario int
);


