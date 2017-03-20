# I Dare You To Kill My App #

## Introdução 

Containers docker no Kubernetes são rápidos, mas será que você consegue ser mais rápido ainda?

## Instalando Requisitos ## 
* NodeJS
	```sh
	curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
	sudo apt-get install -y nodejs
	```

* Instalando dependências 
	```sh
	npm install
	```

## Rodando o sistema ##

É possível rodar o sistema em dois ambientes : 

* Desenvolvimento 
	```sh
	npm start
	```
* Produção
	Para export pro ambiente de produção basta rodar o script
	```sh
	./export_production.sh
	```
	Assim o sistema fica disponível em https://daretokill-79f8f.firebaseapp.com/	



