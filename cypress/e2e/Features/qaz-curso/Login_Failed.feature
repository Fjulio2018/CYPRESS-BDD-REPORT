Feature: Login Failed

Feature Description:
As a client
I want to test with Failed validations
To shop online

  Background:
    Given   I am on the login screen from "Base_URI_QAZANDO"


    Scenario: Login with the credentials  field left empty

    When    I click on Login
    Then    I see the "error" messagem "E-mail inválido."



  Scenario: Login with the email field left empty

    And     fill "password" field with "@123$4xp"
    When    I click on Login
    Then    I see the "error" messagem "E-mail inválido."




  Scenario: Login with the password field left empty

    And     fill "email" field with "xpto@gmail.com"
    When    I click on Login
    Then    I see the "error" messagem "Senha inválida."


  Scenario Outline: Login Field Validation


    When    I fill credentials "<email>" and "<password>"
    Then    I see the "<type>" messagem "<messagem>"
    Examples:
      | email        | password    | type    | messagem          |
#      | Xpto@msn.com | wrongpass   | error   | Senha inválida.  |
#      | Xpto@msn.com | 111111@111  | error   | Senha inválida.  |
#      | Xpto@msn.com | @123$4xp    | success | Login successful |
#      | Xptomsn.com  | @123$4xp    | error   | E-mail inválido. |
#      | Xpto@msn.com | wrongpass   | error   | Senha inválida.  |
      |              | @123$4xp    | error   | E-mail inválido. |
      | Xpto@msn.com |             | error   | Senha inválida.  |





