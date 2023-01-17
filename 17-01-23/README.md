# Esercitazioni 17-01-23

## Esercitazione

Utilizzando sempre le seguenti Rest API: `https://api.escuelajs.co/api/v1/products` lavoriamo sempre al nostro e-commerce.

- Con il metodo giusto per la manipolazione delle stringe limitiamo il titolo della card a solo 10 caratteri e la descrizione della card a soli 30.
- Dovremo crere anche un `addEventListner` al pusante di aggiunta al carrello, in modo da aggiungere l'elemento al vostro carrello `const cart = []` facendo apparire un `alert()` che indichi l'avvenuta aggiunta al carrello dell'elemento.

NB: è gradita sempre la gestione degli errori per il metodo `fetch()` ed un loader

## Avanzato

Fare in modo che gli elementi dentro l'array `const cart = []` vengano visualizzati nel DOM creando i rispettivi elementi e prevedere un pulsante che rimuova l'elemento selezionato dal carrello

## Per usare git per pushare le esercitazioni

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
