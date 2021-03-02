package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class GMailPage {

    public GMailPage() {

        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(id = "identifierId")
    public WebElement mailAdress;
    @FindBy(xpath = "//div [@class='VfPpkd-RLmnJb']")
    public WebElement suivantButton;
    @FindBy(xpath = "  //input [@type='password']")
    public WebElement password;
    @FindBy(xpath = "//span[@id=':2n']")
    public WebElement mailInsta;
    @FindBy(xpath = "  //div[@class='VfPpkd-RLmnJb']\n")
    public WebElement suivanButton2;
    @FindBy(xpath = "//*[@id=\"m_-3127650313774807950email_content\"]/table/tbody/tr[4]/td/table/tbody/tr/td/table/tbody/tr[2]/td[2]/table/tbody/tr[2]/td[2]")
    public WebElement code;





    //input [@type='password']


}
