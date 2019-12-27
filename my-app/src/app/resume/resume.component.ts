import { Component, OnInit } from "@angular/core";
import { Resume } from "./resume";
import { Title } from "../model/title";
import { Company } from "../model/company";
import { Desc } from "../model/decs";
import { ResumeService } from "../services/resume.service";
import { ActivatedRoute } from "@angular/router"; //TODO Bu ne için kullanılıyorud?
import { timer, of, Observable } from "rxjs";
import { retry, catchError, tap, map } from "rxjs/operators";

/*********************/
//Observable timer örneği
// const source = timer(1000, 2000);
// const subscribe = source.subscribe(data => console.log(data + ". saniye"));
// setTimeout(() => { subscribe.unsubscribe(); }, 10000);
/*********************/

/*********************/
//basit bir obsrvable örneği
// const myObservable = of('apple', 'orange', 'grappe');//bir observable tanımlıyoruz.

// const myObserver = {//bir de observer tanımlıyoruz. Aslında gözlemci ve gözlemcinin ne yapacağı tanımlanıyor
//   next: (x: string) => console.log('Observer got a next value: ' + x),
//   error: (err: string) => console.error('Observer got an error: ' + err),
//   complete: () => console.log('Observer got a complete notification'),
// };

// const subscribeMy = myObservable.subscribe(myObserver);
/*********************/

/*********************/
//Observable with Constructor
// function sequenceSubscriber(observer) {
//   observer.next('Apple');
//   observer.next('Orange');
//   observer.next('Grappe');
//   observer.complete();

//   return { unsubscribe() { } };
// }

// const sequence = new Observable(sequenceSubscriber)/*.pipe(tap (p => console.log("fetched fruits.")))*/;

// sequence.subscribe({
//   next(msg) { console.log(msg); },
//   complete() { console.log('Finished sequence'); }
// });
/*********************/

@Component({
  selector: "app-resume",
  templateUrl: "./resume.component.html",
  styleUrls: ["./resume.component.scss"],
  providers: [ResumeService] //local service yaptık
})
export class ResumeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private resumeService: ResumeService
  ) {}

  ngOnInit() {
    this.setAll();
    // this.activatedRoute.params.subscribe(params => {//TODO Bu ne içindi acaba?
    //   console.log("emre");
    //   this.getTitle(null);
    // })
    //this.changeLanguage();
  }

  titles: Title[];
  title: Title;
  companies: Company[];
  descs: Desc[];

  titleObserver =  {
    //bir de observer tanımlıyoruz. Aslında gözlemci ve gözlemcinin ne yapacağı tanımlanıyor
    next: (data) => (this.titles=data),
    error: (err: string) => console.error("Observer got an error: " + err),
    complete: () => console.log("Title fetch tamamlandı.")
  };

  getTitle(titleId) {
    this.resumeService.getTitles$(titleId).subscribe(this.titleObserver);
  }

  updateTitle(title: Title) {
    this.resumeService.updateTitle$(title).subscribe(this.titleObserver);
  }

  createTitle(title:Title) {
    this.resumeService.createTitle$(title).subscribe(this.titleObserver);
  }

  deleteTitle(title:Title) {
    this.resumeService.deleteTitle$(title).subscribe(this.titleObserver);
  }

  getCompanies(companyId) {
    this.resumeService.getCompanies$(companyId).subscribe(data => {
      (this.companies = data),
        err => {
          console.log(err);
        };
    });
  }

  getDesc(descId) {
    this.resumeService.getDescs$(descId).subscribe(data => {
      (this.descs = data),
        err => {
          console.log(err);
        };
    });
  }

  setAll() {
    console.log("setAll() başladı");
    this.getTitle(null);
    //this.getCompanies(null);
    this.getDesc(null);
  }

  //titleOne: string = this.titles[1].title;
  // resumeTr: Resume[] = [
  //   {
  //     summaryTitle:
  //       "Yazılım Uzmanı | Agito Software & Consulting (02.2019 - 08.2019)",
  //     summaryDefination:
  //       "NN Hayat ve Emeklilik şirketinde Outsource Yazılım Uzmanı olarak görev aldım. ING Bank ile NN Hayat ve Emeklilik arasında veri entegrasyonu porjesinde Oracle Database ve PL/SQL ile backend yazılımcı olarak geliştirmeler ve iyileştirme çalışmaları yaptım.",
  //     collapseDefination:
  //       "NN Hayat ve Emeklilik Veri Entegrasyonu | PL/SQL NN Hayat ve Emeklilik ile ING Bank arasında veri entegrasyonu projesinde backend yazılımcı olarak görev aldım. NN Hayat ve Emeklilik verileri anlık olarak kayıt edilip daha sonra asenkron bir yapı ile kontrolü sağlanıp ING Bank sistemi ile entegrasyonu sağlanmaktadır. Bu projede geçmiş verilerin SFTP ile aktarılmasında, sistemin geliştirilmesinde ve iyileştirilmesinde görev aldım."
  //   },

  //   {
  //     summaryTitle:
  //       "Yazılım Uzman Yardımcısı | Agito Software & Consulting (07.2017 - 02.2019 )",
  //     summaryDefination:
  //       "Birden fazla sağlık sigortası şirketine geliştirmeler sağlayan Proje ve Ek Kapsam ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Oracle Database ve PL/SQL ile backend geliştirmede, IIS, ASP.NET ile web uygulaması ve Soap tabanlı web servisleri üzerine geliştirmelerde bulundum. BNP Paribas Cardif sigortacılık şirket için yazılım geliştirme ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Uygulama geliştirmede Oracle Database, PL/SQL, Oracle Forms Builder, Oracle Forms Reports ve Oracle Weblogic Server kullandım.",
  //     collapseDefination:
  //       "BNP Paribas Cardif sigortacılık şirket için yazılım geliştirme ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Uygulama geliştirmede Oracle Database, PL/SQL, Oracle Forms Builder, Oracle Forms Reports ve Oracle Weblogic Server kullandım."
  //   },

  //   {
  //     summaryTitle:
  //       "Stajyer Mühendis | Intertech Bilgi İşlem ve Pazarlama Ticaret A.Ş. (07.2016-08.2016)",
  //     summaryDefination:
  //       "Şirketin Alternatif Dağıtım Kanalları bölümünde Kullanıcı Deneyiminden sorumlulu ekipte görev aldım.  Ms Sql ve Asp.Net ile web uygulaması geliştirdim.",
  //     collapseDefination:
  //       "Bu görev boyunca ekibin kullanabileceği, işlevi ekip içindeki kullanıcıların birbirine görev atayıp bu görevleri takip edebileceği ASP.NET ve MS SQL tabanlı ve N-tier yaklaşımının kullanıldığı bir web uygulaması tasarlayıp hayata geçirdim."
  //   }
  // ];

  // resumeIng: Resume[] = [
  //   {
  //     summaryTitle:
  //       "Software Engineering Intern | Intertech Information Technology and Marketing Inc. (07.2016-08.2016)",
  //     summaryDefination:
  //       "I worked in the team responsible for the user experience in the Alternative Distribution Channels section of the company. I developed a web application with Ms Sql, Asp.Net, Bootstrap.",
  //     collapseDefination:
  //       "I have worked as a backend software developer in the data integration project that between NN Hayat ve Emeklilik and ING Bank. NN Hayat ve Emeklilik data are recorded instantly, then controlled by an asynchronous structure and integrated with ING Bank system. In this project, I took part in transferring historical data with SFTP, developing and improving the integration system."
  //   },

  //   {
  //     summaryTitle:
  //       "Junior Software Developer | Agito Software & Consulting (07.2017 - 02.2019 )",
  //     summaryDefination:
  //       "I worked as an Junior Software Developer in the Project and Additional Scope team that provide development to multiple health insurance companies. With Oracle Database and PL / SQL, I have made developments on backend. With IIS, ASP.NET, I have made developments on Web applications and Soap based web services. At BNP Paribas Cardif Insurance Company, I worked as an Junior Software Developer in the software development team. I worked with Oracle Database, PL / SQL, Oracle Forms Builder, Oracle Forms Reports and Oracle Weblogic Server for application development.",
  //     collapseDefination: "Bıla Bıla"
  //   },

  //   {
  //     summaryTitle:
  //       "Senior Software Developer | Agito Software & Consulting (02.2019 - 08.2019)",
  //     summaryDefination:
  //       "I am working as an Outsource Senior Software Developer at NN Hayat ve Emeklilik. In the data integration project between ING Bank and NN Hayat ve Emeklilik, I am developing and improving the backend software with Oracle Database and PL / SQL.",
  //     collapseDefination: "Bıla Bıla"
  //   }
  // ];

  // language: string = "English";

  // resumes = this.resumeTr;

  // changeLanguage() {
  //   if (this.language == "English") {
  //     this.language = "Tükçe";

  //     this.resumes = this.resumeIng;
  //   } else {
  //     this.language = "English";

  //     this.resumes = this.resumeTr;
  //   }
  // }
}
