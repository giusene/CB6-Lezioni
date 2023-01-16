# Esercitazioni 16-01-23

Potete sempre utilizzare il metodo manuale per caricare le esercitazion su github, ma se volete iniziare ad utilizzare git di seguito troverete i comandi per clonare ed aggiungere le nuove esercitazioni al vostro git hub

- Prima cosa clonatevi la vostra repository delle esercitazioni copiando il link ssh dalla pagina della vostra repository su github.
- Create una nuova cartella ed apritela con VSCode
- Aprite il terminale e digitate

```
git clone <url della vostra repo> .
```

Clonerà la vostra repository nella vostra cartella, adesso potete aggiungere la nuova cartella dell'esercitazione di oggi e non appena avrete finito per "consegnare" basterà eseguire il seguenti comandi da terminale

```
git add .
git commit -m "messaggio del commit"
git push
- probabilemnte vi chiederà di inserire la pass per la vostra chiave ssh che avete creato precedentemente
```

NB: il comando `git clone` lo dovrete eseguire soltanto la prima volta che clonerete la vostra repository

## Esercitazione

Seguendo quello fatto oggi a lezione effettuate una chiamate `fetch()` alla seguente API web: `https://api.escuelajs.co/api/v1/products` e stampate in console nome e descrizione del prodotto simile a questo formato

```
--------------
Tasty Rubber Soap
The Football Is Good For Training And Recreational Purposes
--------------
Modern Bronze Chair
New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016

```

State molto attendi all'asincronicità della `PROMISE`

## Avanzato

Crea delle card il più verosimili possibile ad un vero e-commerce e provate ad utilizzare un loader (puo anche essere un semplice messaggio) e la gestione degli errori
