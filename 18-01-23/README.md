# Esercitazioni 18-01-23

### Documentazione API: `https://api.escuelajs.co/docs/#/products/ProductsController_getAll`

### Schemda flusso dati: `https://excalidraw.com/#json=gQYn591X6kqNeR_bMPRTK,r0THY0RDPfNhWkrexwhakg`

<br>
<br>
## Esercitazione

Utilizzando sempre le seguenti Rest API: `https://api.escuelajs.co/api/v1/products` lavoriamo sempre al nostro e-commerce.

- Creiamo una nuova pagina al nostro e-commerce che includa un form
- Questo form dovrà contenere i seguenti campi:
  - title
  - price
  - category
  - image (dove inseriremo un url ad immagine presente nel web)
  - description

aggiungiamo poi un `addEventlistner` al form che venga triggherato al `submit`.
Questo evento dovrà stampare in console un oggetto che conterrà i seguenti valori

```
{
  title: -valore preso dal form-,
  price: -valore preso dal form-,
  description: -valore preso dal form-,
  categoryId: -valore preso dal form-,
  images: -valore preso dal form-
}
```

NB: per evitare che si riaggiorni al pagine utilizzare il metodo `preventDefault()`

## Avanzato

- Inviare l'oggetto creato in precedenza ad una funzione che faccia una `fetch()` con il metodo `POST` per caricare il nuovo elemento al database
- Gestite le risposte del POST in modo da dare un feedback all'utente

NB: ricordate di stringhificare l'oggetto con il metodo `JSON.stringify()`

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
