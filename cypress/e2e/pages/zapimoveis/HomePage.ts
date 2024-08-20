 class HomePage {

     private static URL = "www.zapimoveis.com.br/"
     private static BTN_OPCAO_ALUGAR = '[data-cy=aluguel-tab]'
     private static TIPO_DE_IMOVEL = '.l-multiselect__input-content'
     private static ONDE_DESEJA_MORAR = '.l-input__input.l-input__input--variant-large.l-input__input--icon-left.l-input__input--counter'
     private static BUSCAR = '[type=submit]'
     private static OPCAO_COBERTURA_COMBOBOX = '#l-checkbox-32'
     private static ACEITA_PETS = cy.contains('Aceita pets')
     private static MOBILIADO = cy.contains('Mobiliado')
     private static VARANDA = cy.contains('Varanda')
     private static PISCINA = cy.contains('Piscina')
     private static IMOVEL = cy.contains('imovel')
     private static TODAS_AS_CARACTERISTICAS = cy.contains('Todas as características')
     private static ANUNCIO = cy.get('[data-cy=rp-cardProperty-location-txt]')
     

    static  open(): void {
        cy.visit(this.URL)
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
    static acionarFiltro(text: string): void {
        if(text === 'Mobiliado'){
            this.MOBILIADO.click()
        }
        if(text === 'Aceita pets'){
            this.ACEITA_PETS.click()
        }
        if(text == 'Piscina'){
            this.PISCINA.click()
        }
       if(text == 'Varanda'){
            this.VARANDA.click()
        } 
    }
    static exibirLista(): void{
        this.ANUNCIO.eq(3).should('exists')
        this.ANUNCIO.click()
    }

    static verificarCaracteristicas(text: string): void{
        this.TODAS_AS_CARACTERISTICAS.click()
        this.ACEITA_PETS.should('exists')
        this.MOBILIADO.should('exists')
    }
 }

 export default HomePage
