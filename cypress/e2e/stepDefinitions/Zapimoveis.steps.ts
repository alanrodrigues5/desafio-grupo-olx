import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor'
import HomePage from '../pages/zapimoveis/HomePage';

Given("que estou na página inicial do portal ZAP imóveis",() => {
     HomePage.open();
});
When("pesquiso uma cobertura para alugar na cidade de São Paulo", () => {
   cy.get('[data-cy="aluguel-tab"]').click()   

   });

   /**
When("a cobertura deve aceitar Pets", () => {
   

});

When("deve estar pronta para morar",() => {
   

});

Then("a lista de resultados é mostrada", () => {
   
});
* 
*/
