#language: pt
Funcionalidade: Buscar Imoveis
#@positivos
  Cenario: Pesquisar Imoveis que aceitam animais e que estejam mobilhados
    Dado que estou na página inicial do portal ZAP imóveis
    Quando pesquiso uma cobertura para alugar na cidade de São Paulo
    E a cobertura deve aceitar Pets
    E deve estar pronta para morar
    Entao a lista de resultados é mostrada

  Cenario: pesquisar imoveis para compra
  #Cenario: pesquisar imoveis para alugar
  #Cenario: denunciar anuncio
  #Cenario: conferir mais ofertas do anunciante
  #Cenario: simular financiamento
  #Cenario: criar alerta de imoveis similares
  #Cenario: falar com anunciante pelo whatsapp
  #Cenario: favoritar anuncio
  #Cenario: compartilhar anuncio

#@negativos
  #Cenario: criar login com dados invalidos
  #Cenario: enviar uma mensagem com dados invalidos