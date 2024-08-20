 class HomePage {

     private static URL = "www.zapimoveis.com.br/"
     private static BTN_OPCAO_ALUGAR = '[data-cy=aluguel-tab]'
     private static TIPO_DE_IMOVEL = '.l-multiselect__input-content'
     private static ONDE_DESEJA_MORAR = '.l-input__input.l-input__input--variant-large.l-input__input--icon-left.l-input__input--counter'
     private static BUSCAR = '[type=submit]'
     private static OPCAO_COBERTURA_COMBOBOX = '#l-checkbox-32'

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

    static pesquisarCobertura(): void {
        cy.get(this.TIPO_DE_IMOVEL).click()
        cy.get(this.BTN_OPCAO_ALUGAR).click()   
        cy.get(this.OPCAO_COBERTURA_COMBOBOX).click()
        cy.get(this.ONDE_DESEJA_MORAR).type('São Paulo - SP, {Enter}')
    }

 }

 export default HomePage
