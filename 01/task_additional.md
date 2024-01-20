# Dodatkowy komponent listy studentów

1. Utwórz dodatkowy komponent za pomocą polecenia `ng g component ...`

2. W dodatkowym komponencie zaimplementuj pobieranie danych o liście studentów podobnie jak na zjaęciach użyj tablicy jako źródła danych w typescript:

```ts
students : any[] =[
    { id : 1, name: 'Jan Kowalski', email: 'jan@gmail.com'},
    { id : 2, name: 'Anna Kowalska', email: 'anna@gmail.com'},
    { id : 3, name: 'Anna Kowalska', email: 'anna@gmail.com'}
  ];
```

3. Utwórz własny widok prezentacji postaraj się wykorzystać komponenty UI dostępne w bootstrapie

https://getbootstrap.com/docs/5.3/getting-started/introduction/

4. Dodaj nowy komponent do obsługi w routingu i dodaj opcje w menu do przekierowania do nowo powstałego komponentu.
