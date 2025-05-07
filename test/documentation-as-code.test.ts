const { test } = require("@playwright/test");
const allure = require("allure-js-commons");

test("Verify confirmation message after updating profile @Positive @UI", async() => {
    await allure.label("ALLURE_MANUAL", "true");
    await allure.epic("Account");
    await allure.feature("Account Settings");
    await allure.story("Update profile information");
    await allure.step("Given the user has updated their profile details", async () => {});
    await allure.step("When the user clicks Save Changes", async () => {});
    await allure.step("Then a confirmation message should be displayed", async () => {});
    await allure.step("And the updated profile information should be shown", async () => {});
});

test("Verify user is logged out after inactivity period @allure.id:10227 @Positive", async() => {
    await allure.label("ALLURE_MANUAL", "true");
    await allure.epic("Account");
    await allure.feature("Security Settings");
    await allure.story("Session timeout");
    await allure.step("Given the user is logged in", async () => {});
    await allure.step("And the user is inactive for a defined period of time", async () => {});
    await allure.step("When the inactivity period expires", async () => {});
    await allure.step("Then the user should be logged out automatically", async () => {});
    await allure.step("And the user should be redirected to the login page", async () => {});
});

test("Verify login succeeds with correct email and password @allure.id:10194 @Smoke", async() => {
    await allure.label("ALLURE_MANUAL", "true");
    await allure.epic("Authentication");
    await allure.feature("Login");
    await allure.story("Login with valid credentials");
    await allure.step("Given the user is on the login page", async () => {});
    await allure.step("And the user enters a valid email and password", async () => {});
    await allure.step("When the user clicks the Login button", async () => {});
    await allure.step("Then the user should be logged in successfully", async () => {});
    await allure.step("And a session token should be issued", async () => {});
});

test("Verify expired reset link prevents password change @allure.id:10203 @Negative", async() => {
    await allure.label("ALLURE_MANUAL", "true");
    await allure.epic("Authentication");
    await allure.feature("Password Management");
    await allure.story("Password Reset");
    await allure.step("Given the user has received the password reset email", async () => {});
    await allure.step("And the reset link has expired", async () => {});
    await allure.step("When the user clicks the reset link", async () => {});
    await allure.step("Then an error message should be displayed", async () => {});
    await allure.step("And the user should not be able to reset the password", async () => {});
});

test("Verify confirmation message is shown after successful payment @allure.id:10216 @Positive @UI", async() => {
    await allure.label("ALLURE_MANUAL", "true");
    await allure.epic("Payments");
    await allure.feature("Bill Payments");
    await allure.story("Pay bill");
    await allure.step("Given the user has paid a bill", async () => {});
    await allure.step("When the payment is successful", async () => {});
    await allure.step("Then a confirmation message should be displayed", async () => {});
    await allure.step("And the payment details should appear in the transaction history", async () => {});
});

test("Verify scheduled payments appear in upcoming section @allure.id:10218 @Positive @UI", async() => {
    await allure.label("ALLURE_MANUAL", "true");
    await allure.epic("Payments");
    await allure.feature("Scheduled Payments");
    await allure.story("Set up scheduled payment");
    await allure.step("Given the user has scheduled a future payment", async () => {});
    await allure.step("When the user navigates to the Upcoming Payments section", async () => {});
    await allure.step("Then the scheduled payment should be visible in the upcoming payments list", async () => {});
    await allure.step("And the payment should show the correct details, such as date and amount", async () => {});
});

test("Verify clicking on transaction shows full details @allure.id:10208 @Positive @UI", async() => {
    await allure.label("ALLURE_MANUAL", "true");
    await allure.epic("Transactions");
    await allure.feature("View Transactions");
    await allure.story("Transaction details");
    await allure.step("Given the user is on the transactions page", async () => {});
    await allure.step("When the user clicks on a specific transaction", async () => {});
    await allure.step("Then the full details of the transaction should be displayed", async () => {});
});

test("Verify user sees summary and confirmation screen before sending funds @allure.id:10235 @Positive @UI", async() => {
    await allure.label("ALLURE_MANUAL", "true");
    await allure.epic("Transfers");
    await allure.feature("External Transfers");
    await allure.story("Transfer confirmation");
    await allure.step("Given the user is on the transfer confirmation page", async () => {});
    await allure.step("When the user reviews the transfer details", async () => {});
    await allure.step("Then the user should see a summary of the transfer", async () => {});
    await allure.step("And a confirmation button to proceed with the transfer", async () => {});
});
