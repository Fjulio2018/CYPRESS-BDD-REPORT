Feature: Login

Feature Description:
As a client
I want to log in to the application
To shop online


  Scenario: Login with the empty fields
    Given   I am on the login screen
    When    I click on Login
    Then    I see the "error" messagem "E-mail inválido."


  Scenario: Login with the empty field email
    Given   I am on the login screen
    And     fill "password" field with "@123$4xp"
    When    I click on Login
    Then    I see the "error" messagem "E-mail inválido."

  Scenario: Login with the empty field password
    Given   I am on the login screen
    And     fill "email" field with "xpto@gmail.com"
    When    I click on Login
    Then    I see the "error" messagem "Senha inválida."


  Scenario: Login with sucess
    Given   I am on the login screen
    And     fill "email" field with "Xpto@msn.com"
    And     fill "password" field with "@123$4xp"
    When    I click on Login
    Then    I see the "sucess" messagem "Olá, Xpto@msn.com"

#  @focus
  Scenario Outline: Login Validation

    Given   I am on the login screen
    When    I fill credential "<email>" and "<password>"
    Then    I see the "<type>" messagem "<mesagem>"
    Examples:
      | email        | password    | type    | mesagem          |
      | Xpto@msn.com | wrongpass   | error   | Senha inválida.  |
      | Xpto@msn.com | @123$4xp    | success | Login successful |
      | Xpto@msn.com | 111111@111  | error   | Senha inválida.  |
      | Xpto@msn.com | @123$4xp    | success | Login successful |
      | Xptomsn.com  | @123$4xp    | error   | E-mail inválido. |
      | Xpto@msn.com | wrongpass   | error   | Senha inválida.  |
      |              | @123$4xp    | error   | E-mail inválido. |





