@instagram
Feature: S'inscrire sur instagram

  @firstpage
  Scenario Outline: L'utilisateur s'inscrit sur instagram
    Given L'Utilisateur est sur l'acceuille d'instagram "https://www.instagram.com/"
    And L'Utilisateur clics sur le button Inscrivez-vous
    And L'Utilisateur saisie l'email "<email>"
    And L'Utilisateur saisie nom complet "<nom>"
    And  L'Utilisateur saisie  nom d'utilisateur "<nom d'utilisateur>"
    And  L'Utilisateur saisie mot de passe "<mot de passe>"
    And  L'Utilisateur sur le button suivant
    Given  L'Utilisateur choisit le jour
    And  L'Utilisateur choisit le mois
    And L'Utilisateur choisit l'année
    And L'Utilisateur clics sur le button suivant
    And L'Utilisateur va sur sa l'adrres mail
    And L'Utilisateur clics sur le mail d'instagram
    And L'Utilisateur copie le code de la verification
    And L'Utilisateur renavigate sur la page de la verification
    And L'Utilisateur colle le code et verifie le code


    Examples:
      | email                   | nom         | nom d'utilisateur | mot de passe |
      | selimmorali02@gmail.com | selim moral | selimmoral0125    | Fr123456     |






