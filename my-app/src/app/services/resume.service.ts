import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Title } from "../model/title";
import { Company } from "../model/company";
import { Desc } from "../model/decs";
import { ResumeDetail } from "../model/resumeDetail";
import { Observable, throwError, of } from "rxjs"; //TODOObservable lar tam olarak anlaşılacak. Biraz anlaşıldı gibi, böyle devam Emre.
import { retry, catchError, tap, map } from "rxjs/operators";
import { environment } from "../../environments/environment";

// Note that the RxJS library is huge. Instead of importing the entire RxJS library using import * as
// Rx from 'rxjs/Rx', it’s recommended to only import the pieces you require. This will substantially
// reduce the size of your resulting code bundle to a minimum.

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

  apiUrl: string = environment.appUrl; //environment default olarak dev modunda çalışır."ng serve --environment prod" ile environment.prod  çalışır
  titles: Title[];
  companies: Company[];
  descs: Desc[];

  getTitles$(titleId): Observable<Title[]> {
    if (titleId) {
      return this.http
        .get<Title[]>(this.apiUrl + "titles/" + titleId) //TODO "posts?userId="  gibi bir soru işareti kullanılmış sorgulama için. Dotnet core api'ı bu hale getirebilrsin. avantajlarına bak
        .pipe(
          retry(1),
          tap(title => console.log("A title fetched:")),
          catchError(this.errorHandler)
        );
    } else {
      return this.http.get<Title[]>(this.apiUrl + "titles").pipe(
        retry(1),
        tap(title => console.log("Titles fetched.")),
        catchError(this.errorHandler)
      );
    }
  }

  createTitle$(title): Observable<Title> {
    if (title) {
      return this.http
        .post<Title>(
          this.apiUrl + "titles",
          JSON.stringify(title),
          this.httpOptions
        )
        .pipe(
          retry(1),
          tap(title => console.log(title.title + " isimli title kaydedildi.")),
          catchError(this.errorHandler)
        );
    }
  }

  updateTitle$(title): Observable<Title> {
    if (title) {
      return this.http.put<Title>(this.apiUrl + "titles/", title).pipe(
        retry(1),
        tap(title => console.log(title.title + " isimli title güncellendi.")),
        catchError(this.errorHandler)
      );
    }
  }

  deleteTitle$(title): Observable<Title> {
    if (title) {
      return this.http
        .delete<Title>(this.apiUrl + "titles/" + title.titleId)
        .pipe(
          retry(1),
          tap(title => console.log(title.title + " isimli title silindi.")),
          catchError(this.errorHandler)
        );
    }
  }

  //Güzel bir örnek--https://www.sitepoint.com/angular-rxjs-create-api-service-rest-backend/
  /*public getAllTodos(): Observable<Todo[]> {
  return this.http
    .get(API_URL + '/todos')
    .map(response => {
      const todos = response.json();
      return todos.map((todo) => new Todo(todo));
    })
    .catch(this.handleError);
    }*/

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
          tap(c => console.log("A Description fetched:")),
          catchError(this.errorHandler)
        );
    } else {
      return this.http.get<Desc[]>(this.apiUrl + "descs").pipe(
        retry(1),
        tap(c => console.log("Descriptions fetched.")),
        catchError(this.errorHandler)
      );
    }
  }

  getResumeDetail$(): Observable<ResumeDetail[]> {
    return this.http.get<ResumeDetail[]>(this.apiUrl + "resumes/getdetail").pipe(
      map(  result => result.sort((obj1,obj2) => {//Gelen verileri start date'e göre sıraladık.
          if(obj1.startDate<obj2.startDate){
            return 1;
          }
          if(obj1.startDate>obj2.startDate){
            return -1
          }
          return 0;
        })),
      retry(1),
      tap(c => console.log("Resume detail fetched.")),
      catchError(this.errorHandler)
    );
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
