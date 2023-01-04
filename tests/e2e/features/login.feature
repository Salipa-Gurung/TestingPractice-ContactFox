Feature: login
    As a user
    I want login
    So that I can add new contact

    Scenario: Login with valid credentials
        Given user has navigated to login page
        When user logs in with following credentials
            |     email   |password|
            |ram@gmail.com|ram12345|
        Then user should be navigated to Contact Fox page

    # Scenario Outline: Login with invalid credential
    #     When user login with following credentials
    #         |email  |password  |
    #         |<email>|<password>|
    #     Then error message "<errorMessage>" should be shown
    #     Examples:
    #         |   email     |password|errorMessage              |
    #         |abc@gmail.com|abc     |Invalid credentials.      |
    #         |xyz@gmail.com|abc12345|Invalid credentials.      |
    #         |abc@gmail.com|        |Please fill in all fields.|
    #         |             |abc12345|Please fill in all fields.|
    #         |             |        |Please fill in all fields.|

    # Scenario Outline: Login with valid credentials
    #     Given user has navigated to login page
    #     When user logs in with following credentials
    #         |     email   |password|
    #         |<email>|<pass>|
    #     Then user should be navigated to Contact Fox page
    #     Examples:
    #         |     email   |pass|
    #         |ram@gmail.com|ram12345|
    #         |gopal@gmail.com|gopal12345|
