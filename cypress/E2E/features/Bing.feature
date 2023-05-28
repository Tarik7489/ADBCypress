# Bing search functionality feature file







Feature: Bing Test Suite




    This feature file will validate title of home page and search functionality







    Background: setupblock




        Given User is on bing page








    @sanity




    Scenario: Title Validation




        It will validate the title of home page




        When user click on search button




        And user type for "Cypress"




        And click on "cypress"




        Then title should contain "About 12,80,00,000 results"