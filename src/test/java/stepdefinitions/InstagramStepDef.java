package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.GMailPage;
import pages.InstagramPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class InstagramStepDef {
    Select select;
    InstagramPage instagramPage = new InstagramPage();
    GMailPage gMailPage = new GMailPage();
    Actions actions;

    @Given("L'Utilisateur est sur l'acceuille d'instagram {string}")
    public void l_Utilisateur_est_sur_l_acceuille_d_instagram(String string) {
        Driver.getDriver().get(string);
    }
    String instaHandle = Driver.getDriver().getWindowHandle();

    @Given("L'Utilisateur clics sur le button Inscrivez-vous")
    public void l_Utilisateur_clics_sur_le_button_Inscrivez_vous() {
        instagramPage.cookies.click();
        instagramPage.inscrireButton.click();
    }

    @Given("L'Utilisateur saisie l'email {string}")
    public void l_Utilisateur_saisie_l_email(String string) {
        instagramPage.mail.sendKeys(string);
    }

    @Given("L'Utilisateur saisie nom complet {string}")
    public void l_Utilisateur_saisie_nom_complet(String string) {
        instagramPage.nom.sendKeys(string);
    }

    @Given("L'Utilisateur saisie  nom d'utilisateur {string}")
    public void l_Utilisateur_saisie_nom_d_utilisateur(String string) {
        instagramPage.username.sendKeys(string);
    }

    @Given("L'Utilisateur saisie mot de passe {string}")
    public void l_Utilisateur_saisie_mot_de_passe(String string) {
        instagramPage.password.sendKeys(string);
    }

    @Given("L'Utilisateur sur le button suivant")
    public void l_Utilisateur_sur_le_button_suivant() {
        instagramPage.buttonSuivant.click();
    }

    @Given("L'Utilisateur choisit le jour")
    public void l_Utilisateur_choisit_le_jour() {
        select = new Select(instagramPage.selectDay);
        select.selectByIndex(4);


    }


    @Given("L'Utilisateur choisit le mois")
    public void l_Utilisateur_choisit_le_mois() {
        select = new Select(instagramPage.selectMonth);
        select.selectByIndex(6);
    }

    @Given("L'Utilisateur choisit l'année")
    public void l_Utilisateur_choisit_l_année() {
        select = new Select(instagramPage.selectYear);
        select.selectByValue("1989");

    }

    @Then("L'Utilisateur clics sur le button suivant")
    public void l_Utilisateur_clics_sur_le_button_suivant() {
        instagramPage.buttonSuivant2.click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }


    @Given("L'Utilisateur va sur sa l'adrres mail")
    public void l_Utilisateur_va_sur_sa_l_adrres_mail() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmailPage"));
        gMailPage.mailAdress.sendKeys(ConfigurationReader.getProperty("gmailAdress"));
        gMailPage.suivantButton.click();
        gMailPage.password.sendKeys(ConfigurationReader.getProperty("gmailPassword"));
        gMailPage.suivanButton2.click();


    }

    @Given("L'Utilisateur clics sur le mail d'instagram")
    public void l_Utilisateur_clics_sur_le_mail_d_instagram() {
          gMailPage.mailInsta.click();

    }

    @Given("L'Utilisateur copie le code de la verification")
    public void l_Utilisateur_copie_le_code_de_la_verification() {
       Actions actions = new Actions(Driver.getDriver());
         actions.doubleClick(gMailPage.code);
         actions.sendKeys(Keys.chord(Keys.LEFT_CONTROL,"c"));


    }

    @Given("L'Utilisateur renavigate sur la page de la verification")
    public void l_Utilisateur_renavigate_sur_la_page_de_la_verification() {
        Driver.getDriver().switchTo().window(instaHandle);
    }



    @Given("L'Utilisateur colle le code et verifie le code")
    public void l_Utilisateur_colle_le_code_et_verifie_le_code() {
        instagramPage.verifierText.click();
        actions.sendKeys(Keys.chord(Keys.LEFT_CONTROL,"c"));
        instagramPage.verificationButton.click();
    }



}