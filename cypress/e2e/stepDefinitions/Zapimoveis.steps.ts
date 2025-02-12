import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../pages/zapimoveis/HomePage';

Given("que estou na página inicial do portal ZAP imóveis",() => {
     HomePage.open();
});
When("pesquiso uma cobertura para alugar na cidade de São Paulo", () => {
   HomePage.pesquisarCobertura();
});

When("a cobertura deve aceitar Pets", () => {
  HomePage.acionarFiltro('Pets')
});

When("deve estar pronta para morar",() => {
   HomePage.acionarFiltro('mobiliado')
});

Then("a lista de resultados é mostrada", () => {
   HomePage.exibirLista()
   HomePage.verificarCaracteristicas('Aceita pets, mobiliado')
});


