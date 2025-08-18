describe("Forex Deal Automation", () => {
  for (let i = 1; i <= 10; i++) {
    it(`fills and submits the Forex deal form - run #${i}`, () => {
      cy.viewport(1040, 800);

      // --- Visit and login ---
      cy.visit("https://bk-fk.info.com.np/");

      cy.get("#username").type("dealcreator01@no.com");
      cy.get("#password").type("Test@12345");

      cy.get("button[type='submit']").click();

      // Wait until dashboard loads
      cy.url().should("include", "/dashboard");
      cy.contains("span", "Treasury Deal Creation", { timeout: 10000 }).should("be.visible");

      // --- Navigate to Forex ---
      cy.contains("span", "Treasury Deal Creation").click();
      cy.contains("span", "Forex").click();

      // --- Select Transaction Type ---
      cy.get("#transactionType").click({ force: true });
      cy.get("div.ant-select-item-option").contains("Sell").click({ force: true });

      // --- Select Selling Currency ---
      cy.get("#currencySoldId").click();
      cy.get("div.ant-select-item-option").contains("AED").click({ force: true });

      // --- Select Buying Currency ---
      cy.get("#currencyBoughtId").click().type("NPR{enter}");

      // --- Select Counter Party ---
      cy.get("#counterPartyId").click();
      cy.get("div.ant-select-item-option").contains("123").click();

      // --- Select Counter Party Dealer ---
      cy.get("#counterPartyDealerId").click().type("123{enter}");

      // --- Enter Selling Amount ---
      cy.get("#amountSold").clear().type("10000");

      // --- Select Today as Value Date ---
      cy.get("#valueDate").click();
      cy.contains("a", "Today").click();

      // --- Select Receiving Accounts ---
      cy.get("#ourReceiveBankAccountId").click();
      cy.contains("div.ant-select-item-option", "ACCOUNT NAME").click();

      cy.get("#counterpartyReceiveBankAccountId").click();
      cy.contains("div.rc-virtual-list", "NEW RECEIVER").click();

      cy.get("#ourPayBankAccountId").click();
      cy.contains("div.ant-select-item-option", "asdf").click();

      // --- Upload file (optional) ---
      // const filePath = "Cypress/fixtures/Screenshot_2025-07-25.png";
      // cy.get("#file").attachFile(filePath);

      // --- Select Verifier ---
      cy.wait(10000);
      cy.contains("span.ant-select-selection-placeholder", "Select Verifier").click({ force: true });
      cy.contains("div.ant-select-item-option", "dealverifier01").click({ force: true });

      // --- Submit Form ---
      cy.contains("button", "Submit").click();

      // --- Verify Submission Success ---
      // cy.contains("Deal submitted successfully", { timeout: 10000 }).should("be.visible");
    });
  }
});
