Feature: Login test Suite

 

Scenario Outline: User enter an valid email and OTP then verifying the behaviour of the fields and next button should be enabled
        Given User is on the Login home screen
        When User types email as "<email>"
        Then Clicks on Login button
        When  User types otp as "<otp>"
        Then User Clicks on the Next Button
        Then User should be logged in successfully
        Examples:
            | email                    | otp  |
            | tarika+16@noumena.global | 1234 |