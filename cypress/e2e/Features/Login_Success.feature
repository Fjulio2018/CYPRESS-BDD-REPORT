Feature: Login Success

Feature Description:
As a client
I want to log in to the application
To shop online




  Scenario: Login with sucess
    Given   I am on the login screen
    And     fill "email" field with "Xpto@msn.com"
    And     fill "password" field with "@123$4xp"
    When    I click on Login
    Then    I see the "success" messagem "Olá, Xpto@msn.com"


  Scenario Outline: Login Success Validation

    Given   I am on the login screen
    When    I fill credentials "<email>" and "<password>"
    Then    I see the "<type>" messagem "<messagem>"
    Examples:
      | email        | password    | type    | messagem          |
      | Xpto@msn.com | @123$4xp    | success | Olá, Xpto@msn.com |






