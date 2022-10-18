
Cypress.Commands.add('InsiraOsDadosDoVeiculo', () => {
    
    cy.get('select[id="make"]').select(4);
    cy.get('select[id="model"]').select(4);
    cy.get('input[id="cylindercapacity"]').type('500');
    cy.get('input[id="engineperformance"').type('1950');
    cy.get('input[id="dateofmanufacture"]').type('02/18/1984');
    cy.get('select[id="numberofseats"]').select(2);
    cy.get('input[value="No"]').click({force: true});
    cy.get('select[id="numberofseatsmotorcycle"]').select(2);
    cy.get('select[id="fuel"]').select(1);
    cy.get('input[id="payload"]').type('120');
    cy.get('input[id="totalweight"]').type('150');
    cy.get('input[id="listprice"]').type('25000');
    cy.get('input[id="licenseplatenumber"]').type('0714');
    cy.get('input[id="annualmileage"]').type('7000');
    cy.contains('button', 'Next').click();

})

Cypress.Commands.add('InsiraOsDadosDoSegurador', () => {
    
    cy.get('input[id="firstname"]').type('Theo');
    cy.get('input[id="lastname"]').type('Almeida');
    cy.get('input[id="birthdate"]').type('01/14/1980');
    cy.get('input[value="Male"]').click({force: true});
    cy.get('input[id="streetaddress"]').type('Rua Vitória, 175');
    cy.get('select[id="country"]').select(31);
    cy.get('input[id="zipcode"]').type('06246150');
    cy.get('input[id="city"]').type('Barueri');
    cy.get('select[id="occupation"]').select(1);
    cy.get('input[value="Other"]').click({force: true});
    cy.get('input[id="website"]').type('www.google.com.br');
    cy.contains('button', 'Open').click();
    cy.contains('button', 'Next').click({force: true});

})

Cypress.Commands.add('SelecioneAOpçãoDePreço', () => {
    
    cy.get('input[id="startdate"]').type('02/10/2023');
    cy.get('select[id="insurancesum"]').select(7);
    cy.get('select[id="meritrating"]').select(5);
    cy.get('select[id="damageinsurance"]').select(3);
    cy.get('input[id="EuroProtection"]').click({force: true});
    cy.get('select[id="courtesycar"]').select(2);
    cy.contains('button', 'Next').click({force: true});

})

Cypress.Commands.add('EnviarCotação', () => {

    const LongText = 'Olá, espero que tenham um ótimo dia !!!'
      
    cy.get('input[id="email"]').type('luaa@gmail.com');
    cy.get('input[id="phone"]').type('11982417072');
    cy.get('input[id="username"]').type('Olivia');
    cy.get('input[id="password"]').type('Oliviaa#0501');
    cy.get('input[id="confirmpassword"]').type('Oliviaa#0501');
    cy.get('textarea[id="Comments"]').type(LongText);
    cy.contains('button', 'Send').click();
    
})





















