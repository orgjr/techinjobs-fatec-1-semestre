use techinjobs;

/* Dummy Values */

insert into empresas  ( senha,nome,razao_social,qtd_funcionarios,email,site,cnpj,endereco,cidade,uf) 
Select 'passwd','FATEC','Faculdade de Tecnologia LTDA',200,'cps@fatec.sp.gov.br','123.456.789/0001-15','https://fatecosasco.edu.br/',
'Rua Pedro Rissato n° 30 – Vila dos Remédios','Osasco','SP';

select * from empresas LIMIT 0, 1000;

describe vagas;

insert into vagas (titulo,resumo,cargo,qtd_vagas,salario_min,salario_max,beneficios,localizacao,atividades,requisitos,diferenciais,id_empresa)
select   'Dev Back-end Node.js','Back-end Node.js (Possibilidade Remoto)','Desenvolvedor Sênior',15,9000,12000, 
 'Vale-refeição   Vale-alimentação   Auxílio Home Office','Rua Pedro Rissato n° 30 – Vila dos Remédios',
 'Construir e manter uma API, desde seu projeto até a sua implantação.   Todo o ciclo de vida de um novo sistema em nodeJS.
 Participar nas decisões de negócio para a criação do sistema e liderar o desenvolvimento da horizontal de back-end.',
   'Conhecimento avançado em Node js, TypeScript, HTML, CSS, JS, REACT e Banco de Dados;   (4-6 anos de experiência)', 'Conhecimentos em Gestão',1;

select * from vagas LIMIT 0, 2000;

