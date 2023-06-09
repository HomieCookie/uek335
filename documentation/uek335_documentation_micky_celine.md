# Dokumentation üK 335

## Inhaltsverzeichnis

- ### [**1.0 Einleitung**](#10-einleitung-1)

  - #### [**1.1 Anforderungen**](#11-anforderungen-1)
  - #### [**1.2 Ziele**](#12-ziele-1)

- ### [**2.0 Mockups und Design**](#20-mockups-und-design-1)

  - #### [**2.1 Infrastruktur**](#21-infrastruktur-1)

- ### [**3.0 Code Dokumentation**](#30-code-dokumentation-1)

- ### [**4.0 Testing**](#40-testing-1)

---

## **1.0 Einleitung**

### **1.1** Anforderungen

Unsere Aufgabe für dieses Projekt ist es, eine mobile Applikation zur Erinnerung der Fertigmeldung zu erstellen.

#### Funktionale Anforderungen

- Als ein Nutzer kann ich den Tag, an dem die Nachricht kommt angeben, so dass wenn ich in den Ferien bin, ich die Fertigmeldung früher machen kann
- Als ein Nutzer kann ich die Zeit angeben, an welcher die Nachricht kommt, damit ich sie in meiner Arbeitszeit bekomme
- Als ein Nutzer kann ich einstellen, wie oft die Nachricht wiederholt wird, damit ich es nicht jeden Monat erneut definieren muss
- Wenn ich als Nutzer kein Tag angegeben habe, bekomme ich die Erinnerung am letzten Arbeitstag im Monat
- Wenn ich die App geschlossen habe, möchte ich als Nutzer, dass die Daten gespeichert wurden, damit ich sie nicht erneut eingeben muss.

#### Nicht-funktionale Anforderungen

- Als ein User finde ich das UI ansprechend, weil ich eine Angenehme User experience möchte
- Als ein User kann ich mich auf den Seiten zurechtfinden, damit ich meine Aenderungen schnell machen kann

### **1.2** Ziele

Die User Stories sind fertig, wenn:

- Der Nutzer einen bestimmten Tag für die Nachricht auswählen kann
- Der Nutzer die Zeit der Nachricht bestimmen kann
- Der Nutzer die Wiederholungen definieren kann
- Die Steuerelemente an den richtigen Stellen verwendet wurden
- Als Standard Tag der letzte Arbeitstag im Monat genommen wird

## **2.0** Mockups und Design

### Home page

Die unten dargestellte Seite, stellt das Mockup unserer Home Page dar. Auf dieser Seite wird als erstes ein kleiner Willkommenstext dargestellt. Weiter unten ist zu sehen, wann die nächste Erinnerung kommt. Falls der Nutzer nicht mehr zufrieden ist, kann er das Datum und die Uhrzeit der Erinnerung ändern.

![Home Page](./homepage.png)

Falls das Datum oder die Uhrzeit geändert werden soll, kann das mit einem einfachen Klick gemacht werden. Mit einem Klick auf das Datum erscheint ein [Popup eines Kalenders.](#datepicker) Das gleiche gilt für die [Uhrzeit](#timepicker).

### Timepicker

Für den Timepicker nutzen wir die Komponente die uns die Library Ract Native Paper bereits bereitstellt. Sobald auf OK gedrückt wird, speichert sich die neue Zeit.  
![Timepicker](timepicker.png)

### Datepicker

Auch für den Datepicker haben wir eine React Native Paper Komponente genommen. Sie funktioniert gleich wie der Timepicker. Mit anderen Worten, nach dem Speichern wird auch hier das neue Datum auf der [Homepage](#home-page) angezeigt.
![Datepicker](./datepicker.png)

Link für Figma: https://www.figma.com/file/K5UEwmhLbN4sTiERp3Dpyk/Mockup-Time-reminder?node-id=0%3A1&t=BZooCcnTby7qsY0U-1

### **2.1** Infrastruktur

In unserem Projekt arbeiten wir mit React Native TS und Expo. Diese Auswahl wurde nicht von uns getroffen, sondern war vorgeschrieben. Jedoch haben wir uns als Components Library für React Native Paper entschieden. Diese Library hat alle wichtige Komponente, welche wir für dieses Projekt brauchen. Die Mockups wurden mit Figma erstellt, da wir schon etwas erfahrung mit Figma hatten.  
Für den Timepicker und Datepicker mussten wir noch zusätzlich react-native-paper-dates installieren.  
Mit folgendem Befehl kann dass gfemacht werden:

```bash
$ npm install react-native-paper-dates --save
```

Und auch für das Routing nutzten wir ein paar Librarys. Die konnten wir ganz einfach mit folgenden Befehlen installieren:

```bash
$ npm i @react-navigation/native
$ npm i @react-navigation/stack
```

### Installation

#### Prerequisites

- [Node.js](https://nodejs.org/en/)
- emulator or device

#### Run the project

```bash
$ npm i
$ npm run android
```

## **3.0** Code Dokumentation

Da eine gute Code Dokumentation verlangt wird, wird user Code mit TSDocs kommentiert. Für alle unsere wichtigsten Funktionen wurden ein paar Kommentare geschrieben, welche dem Leser helfen, den Code besser zu verstehen.

## **4.0** Testing

### Test Konzept

Die Tests wurden alle manuell durchgeführt. Alle Tests wurden auf einer Android Umgebung getestet. Die Testgeräte sind einerseits für das Smartphone: Google Pixel 5 API 33 mit Android 13 für für die Laptops: Lenovo Thinkpad L13 Yoga mit Windows 10 und ein HP EliteBook 850 G8 mit einem Linux Mint 21 Cinnamon. Alle folgenden Tests sind Komponententests und sind dazu noch Whitebox Tests.

![Testing](./testing.png)

---
