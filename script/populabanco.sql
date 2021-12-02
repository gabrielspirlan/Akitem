-- Fornecedor
insert into fornecedor (nome_fornecedor , razao_social , cnpj) values ('Marcenaria Bruna e Sueli', 'Bruna e Sueli Marcenaria Ltda', '31204356000170');
insert into fornecedor (nome_fornecedor , razao_social , cnpj) values ('Aline e Caio Telecom', 'Aline e Caio Telecomunicações ME', '81320526000150');
insert into fornecedor (nome_fornecedor , razao_social , cnpj) values ('Vidros MaRo', 'Maya e Rosa Vidros ME', '69370636000121');

-- Unidade fornecedor
insert into unidade_fornecedor (nome_unidade, logradouro, numero, cidade, cep, id_fornecedor) values ('Marcenaria Bruna e Sueli', 'Alameda Edson', 213, 'Bauru', 17064493, 1);
insert into unidade_fornecedor (nome_unidade, logradouro, numero, cidade, cep, cnpj, id_fornecedor) values ('Marcenaria Bruna e Sueli', 'Rua Dois', 710, 'Mococa', 13737685, '31204356000170', 1);
insert into unidade_fornecedor (nome_unidade, logradouro, numero, cidade, cep, cnpj, id_fornecedor) values ('Marcenaria Bruna e Sueli', 'Rua Quinze de Novembro 865', 627, 'Jundiaí', 13201905, '81320526000150', 2);
insert into unidade_fornecedor (nome_unidade, logradouro, numero, cidade, cep, cnpj, id_fornecedor) values ('Maya e Rosa Vidros ME', 'Rua Cladis Bonini Bandeira', 185, 'Piracicaba', 13422048, '69370636000121', 3);

-- Cliente
insert into cliente(nome, documento, tp_documento) values ('Mário Benedito Victor Souza', 181770416, 'RG');
insert into cliente(nome, documento, tp_documento) values ('Sônia Bárbara Nogueira', 188051466, 'RG');
insert into cliente(nome, documento, tp_documento) values ('Henry Lucas da Mata', 176391253, 'RG');
insert into cliente(nome, documento, tp_documento) values ('Vicente Marcelo Figueiredo', 256358667, 'RG');

-- Produto
insert into produto(nome, descricao, preco, id_fornecedor) values ('Cadeira retro', 'Cadeira retro com encosto em madeira', 550, 1);
insert into produto(nome, descricao, preco, id_fornecedor) values ('Mesa de centro', 'Mesa de centro com tampo em mogno', 900, 1);
insert into produto(nome, descricao, preco, id_fornecedor) values ('Poltrona papai', 'Poltrona do papai reclinavel', 2900, 1);
insert into produto(nome, descricao, preco, id_fornecedor) values ('Cristaleira', 'Cristaleira com portas de vidro', 5000, 1);
insert into produto(nome, descricao, preco, id_fornecedor) values ('Fibra', 'Fibra Optica', 500, 2);
insert into produto(nome, descricao, preco, id_fornecedor) values ('Cabo de rede', 'Cabo de rede', 10, 2);
insert into produto(nome, descricao, preco, id_fornecedor) values ('Copos', 'Jogo de copos em cristal', 350, 3);
insert into produto(nome, descricao, preco, id_fornecedor) values ('Vaso', 'Vaso retro de cristal', 210, 3);

-- Estoque 
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (1, 1, 10, 0);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (1, 2, 15, 4);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (2, 1, 3, 2);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (2, 2, 21, 14);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (3, 2, 4, 0);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (4, 1, 11, 9);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (5, 3, 100, 1);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (6, 3, 1000, 0);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (7, 4, 10, 5);
insert into estoque (id_produto, id_unidade_fornecedor, qtde_estoque, qtde_reservada) values (8, 4, 1, 0);

-- Pedido
insert into pedido (data_pedido, data_entrega, id_cliente, logradouro_entrega, numero_entrega, cep_entrega, cidade_entrega, complemento_entrega, tp_pagamento) values('2021-11-23', '2021-11-26', 1, 'Rua Niteroi', 419, 13737685, 'Mococa', null, 'PIX');
insert into pedido (data_pedido, data_entrega, id_cliente, logradouro_entrega, numero_entrega, cep_entrega, cidade_entrega, complemento_entrega, tp_pagamento) values('2021-11-21', '2021-11-29', 2, 'Rua Treton', 46, 13201905, 'Jundiaí', null, 'Boleto');

-- Item
insert into item_pedido (id_pedido, id_produto, id_unidade_fornecedor, quantidade, valor) values (1, 1, 2, 1, 550);
insert into item_pedido (id_pedido, id_produto, id_unidade_fornecedor, quantidade, valor) values (1, 2, 2, 2, 1800);
insert into item_pedido (id_pedido, id_produto, id_unidade_fornecedor, quantidade, valor) values (2, 3, 3, 5, 50);

-- Distancia CEP
insert into distancia_ceps (cep_origem , cep_destino , distancia ) values  (17064493, 17064493, 1);
insert into distancia_ceps (cep_origem , cep_destino , distancia ) values  (17064493, 13737685, 130);
insert into distancia_ceps (cep_origem , cep_destino , distancia ) values  (17064493, 13201905, 50);
insert into distancia_ceps (cep_origem , cep_destino , distancia ) values  (17064493, 13422048, 90);