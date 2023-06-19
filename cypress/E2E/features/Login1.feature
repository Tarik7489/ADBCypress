# Login functionality

Feature: login Test Suite
    This feature file will validate title of Login Page and enaters email and login to the application

    Background: setupblock
        Given User is on Noumena Login Page

//testing
    @login
    Scenario: Title Validation
        It will validate the title of Login Page

        # Then Title should contain "login"
        Then Title should contains "Log in"


    @OTP
    Scenario: login Functionality
        It will validate the login functionality

        When User enters email as "tarika+16@noumena.global"
        And click on login button
        Then User should navigate to OTP screen


    # @ddt
    # Scenario Outline: Search ddt Validation
    #     It will validate the search functionality for each set of values defined in examples block

    #     When User selects category as "<category>"
    #     And user types product as "<product>"
    #     And click on search button
    #     Then Search result should be displayed

    #     Examples:
    #         | category    | product    |
    #         | Software    | Windows 11 |
    #         | Watches     | Titan      |
    #         | Electronics | Mobiles    |



