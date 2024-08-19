 class HomePage {

     private static URL = "www.zapimoveis.com.br/"
     private static BTN_ALUGAR = '[data-cy=aluguel-tab]'
     private static TIPO_DE_IMOVEL = '.l-multiselect__input-content'
     private static ONDE_DESEJA_MORAR = '#l-multiselect-370345'
     private static BUSCAR = '[type=submit]'

    static  open(): void {
        cy.visit(this.URL)
        //cy.get('[href='/cadastro']')
        //cy.get('[getdata-cy='aluguel-tab']')
        //exemplos que funcionam
        //cy.get('.btn.btn-primary').click()
        //cy.get('.active > a').click()
        //cy.get(':nth-child(2) > a').click()
        //cy.get('#nome').type('xpto')
        //cy.get('#email').type('w@live.com')
        //cy.get('#senha').type('1234')
        //cy.get('.btn').click()
        //cy.wait(5000)
        //cy.get('#email').type('w@live.com')
        //cy.get('#senha').type('1234')
        //cy.get('.btn').click()

    }

    static buscar(): void {
       cy.get(this.BUSCAR).click()
    }

    static pesquisar(text: string): void {
        cy.get(this.ONDE_DESEJA_MORAR).type(text)
    }

 }

 export default HomePage
