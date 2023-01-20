# Esercitazioni 20-01-23

### Documentazione API: `https://api.escuelajs.co/docs/#/products/ProductsController_getAll`

### Schemda flusso dati: `https://excalidraw.com/#json=gQYn591X6kqNeR_bMPRTK,r0THY0RDPfNhWkrexwhakg`

<br>
<br>

## Esercitazione

Lavoriamo sempre al nostro e-commerce

- Aggiungiamo i 2 ulteriori metodi visti a lezione: `PUT` e `DELETE` magari gestendoli con 2 nuovi form mi raccomando a leggere la documentazione per capire quali parametri e/o body inviare al backend per il corretto funzionamento delle chiamate.
- Sistemate tutto il codice in diversi files in modo da rendere il tutto piu leggibile e fruibile.

## Avanzato

- Potete provare a snellire ulteriormente il codice "riciclando" le funzioni ed utilizzandole per piu cose (ovviamente dove è possibile)
- Aggiungete altre features al vostro e-commerce come ad esempio i filtri per categorie e gestite meglio gli elementi aggiunti al carrello.

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
