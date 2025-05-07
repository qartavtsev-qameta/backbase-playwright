const { test, expect } = require("@playwright/test");
const allure = require("allure-js-commons");

test("Verify email preferences can be customized @allure.id:10224 @Email @Positive", async() => {
    await allure.epic("Account");
    await allure.feature("Account Settings");
    await allure.story("Change notification preferences");
    await allure.step("Given the user is on the email preferences page", async () => {});
    await allure.step("When the user updates their email notification settings", async () => {});
    await allure.step("Then the email preferences should be saved", async () => {});
    await allure.step("And the user should receive emails according to the updated preferences", async () => {});
});

test("Verify user can log out from a specific device @allure.id:10226 @Positive", async() => {
    await allure.epic("Account");
    await allure.feature("Security Settings");
    await allure.story("Device management");
    await allure.step("Given the user is viewing their logged-in devices", async () => {});
    await allure.step("When the user selects a device and clicks Log Out", async () => {});
    await allure.step("Then the device should be logged out", async () => {});
    await allure.step("And a confirmation message should be shown", async () => {});
});

test("Verify error message displays on invalid login attempt @allure.id:10197 @Negative", async ({ page }) => {
    await allure.epic("Authentication");
    await allure.feature("Login");
    await allure.story("Login with invalid credentials");
    await allure.step("Given the user is on the login page", async () => {
        await page.goto('https://docs.qameta.io/allure-testops/');
    });
    await allure.step("And the user enters incorrect credentials", async () => {
        await expect(page).toHaveTitle(/Allure TestOps/);
    });
    await allure.step("When the user clicks the Login button", async () => {
        await page.click('text=Overview');
    });
    await allure.step("Then an error message should be shown", async () => {
        await expect(page).toHaveURL('https://wrong-url.com');
    });
    await allure.step("And the user should remain on the login page", async () => {});
});

test("Verify old password is required to change password @allure.id:10205", async ({ page }) => {
    await allure.epic("Authentication");
    await allure.feature("Password Management");
    await allure.story("Change Password");
    await allure.step("Given the user is on the password change page", async () => {
        await page.goto('https://docs.qameta.io/allure-testops/');
    });
    await allure.step("And the user enters a new password without entering the old password", async () => {
        await page.click('text=Overview');
    });
    await allure.step("When the user clicks the Submit button", async () => {
        await expect(page).toHaveURL('https://wrong-url.com');
    });
    await allure.step("Then the user should see an error message", async () => {});
    await allure.step("And the password change should be blocked", async () => {});
});

test("Verify duplicate billers are not allowed @allure.id:10214 @Negative", async() => {
    await allure.epic("Payments");
    await allure.feature("Bill Payments");
    await allure.story("Add new biller");
    await allure.step("Given the user is on the Add Bill page", async () => {});
    await allure.step("And the user tries to add a biller that already exists", async () => {});
    await allure.step("When the user submits the form", async () => {});
    await allure.step("Then an error message should be displayed", async () => {});
    await allure.step("And the biller should not be added again", async () => {});
});

test(" Verify cancellation is confirmed and payment is removed @allure.id:10220", async() => {
    await allure.epic("Payments");
    await allure.feature("Scheduled Payments");
    await allure.story("Cancel scheduled payment");
    await allure.step("Given the user has canceled a scheduled payment", async () => {});
    await allure.step("Then the canceled payment should no longer appear in the scheduled list", async () => {});
    await allure.step("And a confirmation message should be displayed", async () => {});
});

test("Verify user can export transactions to CSV @allure.id:10212 @CSV @Positive", async() => {
    await allure.epic("Transactions");
    await allure.feature("Export Transactions");
    await allure.story("Export to PDF/CSV");
    await allure.step("Given the user is on the transactions page", async () => {});
    await allure.step("When the user clicks on the Export to CSV button", async () => {});
    await allure.step("Then the transactions should be exported as a CSV file", async () => {});
    await allure.step("And the file should contain all relevant transaction fields", async () => {});
});

test("Verify user can filter transactions by date range @allure.id:10206 @Positive @UI", async() => {
    await allure.epic("Transactions");
    await allure.feature("View Transactions");
    await allure.story("Filter and sort");
    await allure.step("Given the user is on the transactions page", async () => {});
    await allure.step("When the user selects a date range filter", async () => {});
    await allure.step("Then the transactions should be filtered by the selected date range", async () => {});
});

test("Verify invalid routing/account numbers are rejected @allure.id:10232 @Negative", async() => {
    await allure.epic("Transfers");
    await allure.feature("External Transfers");
    await allure.story("Add external account");
    await allure.step("Given the user enters an invalid routing or account number", async () => {});
    await allure.step("When the user submits the account details", async () => {});
    await allure.step("Then the system should reject the input", async () => {});
    await allure.step("And an error message should be displayed", async () => {});
});

test("Verify balances update after transfer @allure.id:10230 @Positive", async() => {
    await allure.epic("Transfers");
    await allure.feature("Internal Transfers");
    await allure.story("Transfer between user’s accounts");
    await allure.step("Given the user has sufficient balance in both the source and destination accounts", async () => {});
    await allure.step("When the user initiates a transfer between accounts", async () => {});
    await allure.step("And the transfer is successful", async () => {});
    await allure.step("Then the balance in the source account should be reduced by the transfer amount", async () => {});
    await allure.step("And the balance in the destination account should be increased by the same amount", async () => {});
});
