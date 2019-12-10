DROP TABLE RECEITA;
DROP TABLE CATEGORIA;


CREATE TABLE CATEGORIA(
    categoriaNome VARCHAR(200) PRIMARY KEY
);

CREATE TABLE RECEITA(
	id INTEGER auto_increment,
    nome VARCHAR(200),
    PRIMARY KEY(id, categoriaNome),
    preparo VARCHAR(200),
    categoriaNome VARCHAR(200),
    FOREIGN KEY (categoriaNome) REFERENCES categoria(categoriaNome)
);