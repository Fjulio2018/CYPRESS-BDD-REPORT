Feature: Register user on site

Feature Description:
As a client
I want register on aplication
To shop online

  Background:
    Given   I am on the register screen from "REGISTER_URI_OPENCART"


  Scenario Outline: User Register Validation

    When I register the user "<FirstName>", "<LastName>","<email>","<password>","<Telephone>".
    Then I see the "<UserOfData>" user register messagem "<messagem>"
    And  I double check in data register "<FirstName>", "<LastName>","<email>","<password>","<Telephone>","<UserOfData>".

    Examples:
      | FirstName | LastName  | email           | password | Telephone   | UserOfData       | messagem                                       |
      | First q   | last    q | XptoqFL@msn.com | @123$4xp | 55199944462 | already-existent | Warning: E-Mail Address is already registered! |
#      |           |           |                 |          |             | non-existent     | Your Account Has Been Created!                 |



