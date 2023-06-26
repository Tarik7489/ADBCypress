Feature: Login test Suite


    Scenario Outline: Verify the error message when user enters invalid email
        Given User is on Login screen
        When User types invalid email as "<email>"
        Then Clicks on the Login button
        Then Verify the error message
        Examples:
            | email          |
            | tarika+16@noum |


    Scenario Outline: Verify the error message when field is empty
        Given User is on Login page
        When User enters invalid email as "<email>"
        Then Click on the Login button
        Then Verify error message
        Then Clear the email field
        Then Validate the error message
        Examples:
            | email          |
            | tarika+16@noum |

    Scenario Outline: Verify the login button is disabled by default
        Given User is on Login page1
        Then Login button should be disabled

    Scenario Outline: Verify the ivalid OTP toast message
        Given User is on Login page2
        When User enters valid email as "<email>"
        Then Clicks on the Login button
        When user enters invalid OTP as "<otp>"
        Then Clicks on next button
        Then Validate the toast message
        Examples:
            | email                      |otp|
            | tarika+16@noumena.global   |2345|