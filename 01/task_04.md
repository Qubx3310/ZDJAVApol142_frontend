# Pobieranie danych o studentach z API

1. Utwórz w aplikacji (w folderze src/app) dwa foldery - `services` oraz `models`.

2. Uruchom terminal w folderze `services` możesz do tego użyć poleceń `cd`.

3. Wygeneruj serwis poleceniem.

```ps
ng generate service Student
```

4. W folderze `models` utwórz interfejs studenta.

```ts
export interface Student {
    id: number;
    name: string;
    email: string;
  }
```

5. W utworzonym serwisie zaimportuj następujące pakiety

```ts
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
```

6. Wstrzyknij w konstruktor klienta http oraz napisz metodę pobierającą dane z serwera

```ts
 constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentsUrl);
  }
```

7. Nad konstruktorem dodaj pole określające adres endpointu.

```ts
private studentsUrl = 'https://jsonplaceholder.typicode.com/users';
```
