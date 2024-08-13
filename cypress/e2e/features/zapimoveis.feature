#language: pt
Funcionalidade: Buscar Imoveis
  Cenario: Using the search input with the text "smoke test"
    Dado que estou na página inicial do portal ZAP imóveis
    Quando pesquiso uma cobertura para alugar na cidade de São Paulo
    E a cobertura deve aceitar Pets
    E deve estar pronta para morar
    Entao a lista de resultados é mostrada