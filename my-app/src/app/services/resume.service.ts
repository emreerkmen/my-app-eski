import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Title } from "../model/title";
import { Company } from "../model/company";
import { Desc } from "../model/decs";
import { Observable, throwError, of } from "rxjs"; //TODOObservable lar tam olarak anlaşılacak.
import { retry, catchError, tap, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ResumeService {
  // myAppUrl: string;
  // myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8"
    })
  };
  // constructor(private http: HttpClient) {
  //     this.myAppUrl = environment.appUrl;
  //     this.myApiUrl = 'api/BlogPosts/';
  // }

  constructor(private http: HttpClient) {}

  apiUrl: string = "https://localhost:44306/api/";
  titles: Title[];
  companies: Company[];
  descs: Desc[];

  getTitles$(titleId): Observable<Title[]> {
    if (titleId) {
      return this.http
        .get<Title[]>(this.apiUrl + "titles/" + titleId) //TODO "posts?userId="  gibi bir soru işareti kullanılmış sorgulama için. Dotnet core api'ı bu hale getirebilrsin. avantajlarına bak
        .pipe(
          retry(1),
          tap(title =>
            console.log("A title fetched:")
          ) /*,
          catchError(this.errorHandler)*/
        );
    } else {
      return this.http.get<Title[]>(this.apiUrl + "titles").pipe(
        retry(1),
        tap(title => console.log("Titles fetched.")),
        catchError(this.errorHandler)
      );
    }
  }

  saveTitles(title): Observable<Title> {
    return this.http
      .post<Title>(
        this.apiUrl + "titles/",
        JSON.stringify(title),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.errorHandler));
  }

  getCompanies$(companyId): Observable<Company[]> {
    if (companyId) {
      return this.http
        .get<Company[]>(this.apiUrl + "companies/" + companyId) //TODO "posts?userId="  gibi bir soru işareti kullanılmış sorgulama için. Dotnet core api'ı bu hale getirebilrsin. avantajlarına bak
        .pipe(
          retry(1),
          tap(c => console.log("A Company fetched:"))
        );
    } else {
      return this.http.get<Company[]>(this.apiUrl + "companies").pipe(
        retry(1),
        tap(c => console.log("Componies fetched."))
      );
    }
  }

  getDescs$(descId): Observable<Desc[]> {
    if (descId) {
      return this.http
        .get<Desc[]>(this.apiUrl + "descs/" + descId) //TODO "posts?userId="  gibi bir soru işareti kullanılmış sorgulama için. Dotnet core api'ı bu hale getirebilrsin. avantajlarına bak
        .pipe(
          retry(1),
          tap(c => console.log("A Description fetched:"))
        );
    } else {
      return this.http.get<Desc[]>(this.apiUrl + "descs").pipe(
        retry(1),
        tap(c => console.log("Descriptions fetched."))
      );
    }
  }

  errorHandler(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
