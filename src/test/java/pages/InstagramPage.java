package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class InstagramPage {

    public InstagramPage() {
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(xpath = "//span[@class='_7UhW9   xLCgt       qyrsm      gtFbE      se6yk        ']")
    public WebElement inscrireButton;
    @FindBy(xpath = "//button[@class='aOOlW  bIiDR  ']")
    public WebElement cookies;
    @FindBy(xpath = "//input[@name='emailOrPhone']")
    public WebElement mail;
    @FindBy(xpath = "//input[@name='fullName']")
    public WebElement nom;
    @FindBy(xpath = "//input[@name='username']")
    public WebElement username;
    @FindBy(xpath = "//input[@name='password']")
    public WebElement password;
    @FindBy(xpath = "(//button[@class='sqdOP  L3NKy   y3zKF     '])[2]")
    public WebElement buttonSuivant;
    @FindBy(xpath = "//select[@title='Month:']")
    public WebElement selectMonth;
    @FindBy(xpath = "//select[@title='Day:']")
    public WebElement selectDay;
    @FindBy(xpath = "//select[@title='Year:']")
    public WebElement selectYear;
    @FindBy(xpath = "//button[@class='sqdOP  L3NKy _4pI4F  y3zKF     ']")
    public WebElement buttonSuivant2;
    @FindBy(xpath = "//input[@name='email_confirmation_code']")
    public WebElement verifierText;
    @FindBy(xpath = "//input[@class='j_2Hd    RO68f  M5V28']")
    public WebElement buttonSuivant3;
    @FindBy(xpath = " //input[@name='email_confirmation_code']")
    public WebElement verificationButton;











}
