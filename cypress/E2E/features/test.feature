# Feature: Bing Search
#     As a user
#     I want to perform a search on Bing
#     So that I can find relevant information

#     Scenario: Perform a search on Bing
#         Given User is on Bing home page
#         When User enters value as "Cypress"
#         And Press enter key on the keyboard
#         Then User should navigate to search results page
#         And Search results should contain "Cypress"



# Bing search functionality feature file

Feature: Bing Test Suite
    This feature file will validate title and search functionality

    Background: setupblock
        Given User is on Bing home page


    # @sanity
    # Scenario: Title Validation
    #     It will validate the title of home page

    #     Then Title should contain "Welcome to Bing Search"


    @smoke
    Scenario: Search Validation
        It will validate the search functionality

        When User enters value as "Cypress"
        And Press enter key on the keyboard
        Then User should navigate to search results page
        And Search results should contain "Cypress"



