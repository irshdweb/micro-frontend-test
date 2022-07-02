describe('wrapper', () => {
  beforeEach(() => cy.visit('/iframe.html?id=tablewrappercomponent--primary&args=form;model;options;fields;'));
  it('should render the component', () => {
    cy.get('my-org-table-wrapper').should('exist');
  });
});