import { Component, OnInit } from '@angular/core';
import { Resume } from './resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  resumeTr: Resume[] = 
  [{summaryTitle:"Yazılım Uzmanı | Agito Software & Consulting (02.2019 - 08.2019)",
    summaryDefination:"NN Hayat ve Emeklilik şirketinde Outsource Yazılım Uzmanı olarak görev aldım. ING Bank ile NN Hayat ve Emeklilik arasında veri entegrasyonu porjesinde Oracle Database ve PL/SQL ile backend yazılımcı olarak geliştirmeler ve iyileştirme çalışmaları yaptım.",
    collapseDefination:"NN Hayat ve Emeklilik Veri Entegrasyonu | PL/SQL NN Hayat ve Emeklilik ile ING Bank arasında veri entegrasyonu projesinde backend yazılımcı olarak görev aldım. NN Hayat ve Emeklilik verileri anlık olarak kayıt edilip daha sonra asenkron bir yapı ile kontrolü sağlanıp ING Bank sistemi ile entegrasyonu sağlanmaktadır. Bu projede geçmiş verilerin SFTP ile aktarılmasında, sistemin geliştirilmesinde ve iyileştirilmesinde görev aldım."},

   {summaryTitle:"Yazılım Uzman Yardımcısı | Agito Software & Consulting (07.2017 - 02.2019 )",
    summaryDefination:"Birden fazla sağlık sigortası şirketine geliştirmeler sağlayan Proje ve Ek Kapsam ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Oracle Database ve PL/SQL ile backend geliştirmede, IIS, ASP.NET ile web uygulaması ve Soap tabanlı web servisleri üzerine geliştirmelerde bulundum. BNP Paribas Cardif sigortacılık şirket için yazılım geliştirme ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Uygulama geliştirmede Oracle Database, PL/SQL, Oracle Forms Builder, Oracle Forms Reports ve Oracle Weblogic Server kullandım.",
    collapseDefination:"BNP Paribas Cardif sigortacılık şirket için yazılım geliştirme ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Uygulama geliştirmede Oracle Database, PL/SQL, Oracle Forms Builder, Oracle Forms Reports ve Oracle Weblogic Server kullandım."},

    {summaryTitle:"Stajyer Mühendis | Intertech Bilgi İşlem ve Pazarlama Ticaret A.Ş. (07.2016-08.2016)",
    summaryDefination:"Şirketin Alternatif Dağıtım Kanalları bölümünde Kullanıcı Deneyiminden sorumlulu ekipte görev aldım.  Ms Sql ve Asp.Net ile web uygulaması geliştirdim.",
    collapseDefination:"Bu görev boyunca ekibin kullanabileceği, işlevi ekip içindeki kullanıcıların birbirine görev atayıp bu görevleri takip edebileceği ASP.NET ve MS SQL tabanlı ve N-tier yaklaşımının kullanıldığı bir web uygulaması tasarlayıp hayata geçirdim."},
   ];

  resumeIng: Resume[] = 
  [{summaryTitle:"Software Engineering Intern | Intertech Information Technology and Marketing Inc. (07.2016-08.2016)",
    summaryDefination:"I worked in the team responsible for the user experience in the Alternative Distribution Channels section of the company. I developed a web application with Ms Sql, Asp.Net, Bootstrap.",
    collapseDefination:"I have worked as a backend software developer in the data integration project that between NN Hayat ve Emeklilik and ING Bank. NN Hayat ve Emeklilik data are recorded instantly, then controlled by an asynchronous structure and integrated with ING Bank system. In this project, I took part in transferring historical data with SFTP, developing and improving the integration system."},

    {summaryTitle:"Junior Software Developer | Agito Software & Consulting (07.2017 - 02.2019 )",
    summaryDefination:"I worked as an Junior Software Developer in the Project and Additional Scope team that provide development to multiple health insurance companies. With Oracle Database and PL / SQL, I have made developments on backend. With IIS, ASP.NET, I have made developments on Web applications and Soap based web services. At BNP Paribas Cardif Insurance Company, I worked as an Junior Software Developer in the software development team. I worked with Oracle Database, PL / SQL, Oracle Forms Builder, Oracle Forms Reports and Oracle Weblogic Server for application development.",
    collapseDefination:"Bıla Bıla"},

    {summaryTitle:"Senior Software Developer | Agito Software & Consulting (02.2019 - 08.2019)",
    summaryDefination:"I am working as an Outsource Senior Software Developer at NN Hayat ve Emeklilik. In the data integration project between ING Bank and NN Hayat ve Emeklilik, I am developing and improving the backend software with Oracle Database and PL / SQL.",
    collapseDefination:"Bıla Bıla"}];

  language: string = "English";

  resumes = this.resumeTr;


  constructor() { 
  }

  ngOnInit() {
    this.changeLanguage();
  }

  changeLanguage() {
    if (this.language == "English")  {
      this.language = "Tükçe";

      this.resumes = this.resumeIng;

    }else{

      this.language = "English"

      this.resumes = this.resumeTr;

    } 
  }

}
