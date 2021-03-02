$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/instagram.feature");
formatter.feature({
  "name": "S\u0027inscrire sur instagram",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@instagram"
    }
  ]
});
formatter.scenarioOutline({
  "name": "L\u0027utilisateur s\u0027inscrit sur instagram",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@firstpage"
    }
  ]
});
formatter.step({
  "name": "L\u0027Utilisateur est sur l\u0027acceuille d\u0027instagram \"https://www.instagram.com/\"",
  "keyword": "Given "
});
formatter.step({
  "name": "L\u0027Utilisateur clics sur le button Inscrivez-vous",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur saisie l\u0027email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur saisie nom complet \"\u003cnom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur saisie  nom d\u0027utilisateur \"\u003cnom d\u0027utilisateur\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur saisie mot de passe \"\u003cmot de passe\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur sur le button suivant",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur choisit le jour",
  "keyword": "Given "
});
formatter.step({
  "name": "L\u0027Utilisateur choisit le mois",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur choisit l\u0027année",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur clics sur le button suivant",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur va sur sa l\u0027adrres mail",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur clics sur le mail d\u0027instagram",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur copie le code de la verification",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur renavigate sur la page de la verification",
  "keyword": "And "
});
formatter.step({
  "name": "L\u0027Utilisateur colle le code et verifie le code",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "nom",
        "nom d\u0027utilisateur",
        "mot de passe"
      ]
    },
    {
      "cells": [
        "selimmorali02@gmail.com",
        "selim moral",
        "selimmoral0125",
        "Fr123456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "L\u0027utilisateur s\u0027inscrit sur instagram",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@instagram"
    },
    {
      "name": "@firstpage"
    }
  ]
});
formatter.step({
  "name": "L\u0027Utilisateur est sur l\u0027acceuille d\u0027instagram \"https://www.instagram.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_est_sur_l_acceuille_d_instagram(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur clics sur le button Inscrivez-vous",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_clics_sur_le_button_Inscrivez_vous()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur saisie l\u0027email \"selimmorali02@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_saisie_l_email(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur saisie nom complet \"selim moral\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_saisie_nom_complet(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur saisie  nom d\u0027utilisateur \"selimmoral0125\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_saisie_nom_d_utilisateur(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur saisie mot de passe \"Fr123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_saisie_mot_de_passe(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur sur le button suivant",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_sur_le_button_suivant()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur choisit le jour",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_choisit_le_jour()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur choisit le mois",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_choisit_le_mois()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur choisit l\u0027année",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_choisit_l_année()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur clics sur le button suivant",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_clics_sur_le_button_suivant()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "L\u0027Utilisateur va sur sa l\u0027adrres mail",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_va_sur_sa_l_adrres_mail()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JUNIQM5\u0027, ip: \u0027192.168.0.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 88.0.4324.96 (68dba2d8a0b14..., userDataDir: C:\\Users\\ibrahim\\AppData\\Lo...}, goog:chromeOptions: {debuggerAddress: localhost:53128}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f19cc6841b2cd50650a6a1d67d36f659\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy14.sendKeys(Unknown Source)\r\n\tat stepdefinitions.InstagramStepDef.l_Utilisateur_va_sur_sa_l_adrres_mail(InstagramStepDef.java:94)\r\n\tat ✽.L\u0027Utilisateur va sur sa l\u0027adrres mail(file:///C:/Users/ibrahim/IdeaProjects/InstagramCompte/src/test/resources/features/instagram.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "L\u0027Utilisateur clics sur le mail d\u0027instagram",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_clics_sur_le_mail_d_instagram()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "L\u0027Utilisateur copie le code de la verification",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_copie_le_code_de_la_verification()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "L\u0027Utilisateur renavigate sur la page de la verification",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_renavigate_sur_la_page_de_la_verification()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "L\u0027Utilisateur colle le code et verifie le code",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InstagramStepDef.l_Utilisateur_colle_le_code_et_verifie_le_code()"
});
formatter.result({
  "status": "skipped"
});
});