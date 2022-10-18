/// <reference types="cypress" />

  describe('Cadastro Tricentis', () => {
})
    it.only('Verifica o titulo da aplicação', () => {
  
      cy.visit('./101/app.php', {failOnStatusCode: false});
      cy.title().should('be.equal', 'Enter Vehicle Data');
})
    it('Preenchimento dos dados até o envio do e-mail', () => {
        
        // Preencher os dados do veiculo
      
        const LongText = 'Olá, espero que tenham um ótimo dia !!!'
      cy.visit('./101/app.php', {failOnStatusCode: false});
      
      cy.InsiraOsDadosDoVeiculo();

      cy.contains('Enter Insurant Data').should('be.visible'); 
    
        // Preencher os dados do segurador
    
      cy.InsiraOsDadosDoSegurador();
      
      cy.contains('Enter Product Data').should('be.visible'); 

        // Preencher os dados do produto

      cy.SelecioneAOpçãoDePreço(),
      
      cy.contains('Select Price Option').should('be.visible');

        // Selecione a opção de preço

      cy.get('input[value="Gold"]').click({force: true});
      cy.contains('button', 'Next').click({force: true});
      cy.contains('Send Quote').should('be.visible');

      //Enviar cotação
      
      cy.EnviarCotação();
      
      cy.contains('Sending e-mail success!').should('be.visible');
})
  
  
      

 
 