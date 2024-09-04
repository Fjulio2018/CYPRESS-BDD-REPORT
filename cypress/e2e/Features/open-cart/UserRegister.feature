Feature: Register user on site

Feature Description:
As a client
I want register on aplication
To shop online

  Background:
    Given   I am on the register screen from "REGISTER_URI_OPENCART"


  Scenario Outline: User Register with success

    When I register the user "<FirstName>", "<LastName>","<email>","<password>","<Telephone>".
    Then I see the "<type>" register messagem "<messagem>"

    Examples:
      | FirstName | LastName     | email        | password | Telephone   | type    | messagem                       |
      | Ira       | Dias de Luta | Xpto@msn.com | @123$4xp | 55199935562 | success | Your Account Has Been Created! |


