create table receita(
	id INTEGER auto_increment PRIMARY KEY,
    nome VARCHAR(200),
    preparo VARCHAR(200)
);

create table categoria(
    id INTEGER auto_increment PRIMARY KEY,
    categoriaNome VARCHAR(200)
);