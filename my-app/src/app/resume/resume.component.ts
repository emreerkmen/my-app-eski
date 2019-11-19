import { Component, OnInit } from '@angular/core';
import { Resume } from './resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.changeLanguage();
  }

  resumeTr: Resume[] = 
  [{summaryTitle:"Stajyer Mühendis | Intertech Bilgi İşlem ve Pazarlama Ticaret A.Ş. (07.2016-08.2016)",
    summaryDefination:"Şirketin Alternatif Dağıtım Kanalları bölümünde Kullanıcı Deneyiminden sorumlulu ekipte görev aldım.  Ms Sql ve Asp.Net ile web uygulaması geliştirdim.",
    collapseDefination:"NN Hayat ve Emeklilik Veri Entegrasyonu | PL/SQL NN Hayat ve Emeklilik ile ING Bank arasında veri entegrasyonu projesinde backend yazılımcı olarak görev alıyorum. NN Hayat ve Emeklilik verileri anlık olarak kayıt edilip daha sonra asenkron bir yapı ile kontrolü sağlanıp ING Bank sistemi ile entegrasyonu sağlanmaktadır. Bu projede geçmiş verilerin SFTP ile aktarılmasında, sistemin geliştirilmesinde ve iyileştirilmesinde görev aldım."},

   {summaryTitle:"Yazılım Uzman Yardımcısı | Agito Software & Consulting (07.2017 - 02.2019 )",
    summaryDefination:"Birden fazla sağlık sigortası şirketine geliştirmeler sağlayan Proje ve Ek Kapsam ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Oracle Database ve PL/SQL ile backend geliştirmede, IIS, ASP.NET ile web uygulaması ve Soap tabanlı web servisleri üzerine geliştirmelerde bulundum. BNP Paribas Cardif sigortacılık şirket için yazılım geliştirme ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Uygulama geliştirmede Oracle Database, PL/SQL, Oracle Forms Builder, Oracle Forms Reports ve Oracle Weblogic Server kullandım.",
    collapseDefination:"Bıla Bıla"},

   {summaryTitle:"Yazılım Uzmanı | Agito Software & Consulting (02.2019 - 08.2019)",
    summaryDefination:"NN Hayat ve Emeklilik şirketinde Outsource Yazılım Uzmanı olarak görev alıyorum. ING Bank ile NN Hayat ve Emeklilik arasında veri entegrasyonu porjesinde Oracle Database ve PL/SQL ile backend yazılımcı olarak geliştirmeler ve iyileştirme çalışmaları yapıyorum.",
    collapseDefination:"Bıla Bıla"}];

    resumeIng: Resume[] = 
    [{summaryTitle:"",
      summaryDefination:"",
      collapseDefination:""},
  
     {summaryTitle:"",
      summaryDefination:"",
      collapseDefination:"Bıla Bıla"},
  
     {summaryTitle:"",
      summaryDefination:"",
      collapseDefination:"Bıla Bıla"}];


  language: string = "English";

  summaryTitle0: string= "Stajyer Mühendis | Intertech Bilgi İşlem ve Pazarlama Ticaret A.Ş. (07.2016-08.2016)";
  summaryTitle1: string= "Yazılım Uzman Yardımcısı | Agito Software & Consulting (07.2017 - 02.2019 )";
  summaryTitle2: string= "Yazılım Uzmanı | Agito Software & Consulting (02.2019 - 08.2019)";

  summaryDefinition0: string= "Şirketin Alternatif Dağıtım Kanalları bölümünde Kullanıcı Deneyiminden sorumlulu ekipte görev aldım.  Ms Sql ve Asp.Net ile web uygulaması geliştirdim.";
  summaryDefinition1: string= "Birden fazla sağlık sigortası şirketine geliştirmeler sağlayan Proje ve Ek Kapsam ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Oracle Database ve PL/SQL ile backend geliştirmede, IIS, ASP.NET ile web uygulaması ve Soap tabanlı web servisleri üzerine geliştirmelerde bulundum. BNP Paribas Cardif sigortacılık şirket için yazılım geliştirme ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Uygulama geliştirmede Oracle Database, PL/SQL, Oracle Forms Builder, Oracle Forms Reports ve Oracle Weblogic Server kullandım.";
  summaryDefinition2: string= "NN Hayat ve Emeklilik şirketinde Outsource Yazılım Uzmanı olarak görev alıyorum. ING Bank ile NN Hayat ve Emeklilik arasında veri entegrasyonu porjesinde Oracle Database ve PL/SQL ile backend yazılımcı olarak geliştirmeler ve iyileştirme çalışmaları yapıyorum.";

  summaryDefinitionCollapse2: string= "NN Hayat ve Emeklilik Veri Entegrasyonu | PL/SQL NN Hayat ve Emeklilik ile ING Bank arasında veri entegrasyonu projesinde backend yazılımcı olarak görev alıyorum. NN Hayat ve Emeklilik verileri anlık olarak kayıt edilip daha sonra asenkron bir yapı ile kontrolü sağlanıp ING Bank sistemi ile entegrasyonu sağlanmaktadır. Bu projede geçmiş verilerin SFTP ile aktarılmasında, sistemin geliştirilmesinde ve iyileştirilmesinde görev aldım.";



  changeLanguage() {
    if (this.language == "English")  {
      this.language = "Tükçe";

      this.summaryTitle0 = "Software Engineering Intern | Intertech Information Technology and Marketing Inc. (07.2016-08.2016)";
      this.summaryTitle1 = "Junior Software Developer | Agito Software & Consulting (07.2017 - 02.2019 )";
      this.summaryTitle2 = "Senior Software Developer | Agito Software & Consulting (02.2019 - 08.2019)";

      this.summaryDefinition0 = "I worked in the team responsible for the user experience in the Alternative Distribution Channels section of the company. I developed a web application with Ms Sql, Asp.Net, Bootstrap.";
      this.summaryDefinition1 = "I worked as an Junior Software Developer in the Project and Additional Scope team that provide development to multiple health insurance companies. With Oracle Database and PL / SQL, I have made developments on backend. With IIS, ASP.NET, I have made developments on Web applications and Soap based web services. At BNP Paribas Cardif Insurance Company, I worked as an Junior Software Developer in the software development team. I worked with Oracle Database, PL / SQL, Oracle Forms Builder, Oracle Forms Reports and Oracle Weblogic Server for application development.";
      this.summaryDefinition2 = "I am working as an Outsource Senior Software Developer at NN Hayat ve Emeklilik. In the data integration project between ING Bank and NN Hayat ve Emeklilik, I am developing and improving the backend software with Oracle Database and PL / SQL.";

      this.summaryDefinitionCollapse2 = "I have worked as a backend software developer in the data integration project that between NN Hayat ve Emeklilik and ING Bank. NN Hayat ve Emeklilik data are recorded instantly, then controlled by an asynchronous structure and integrated with ING Bank system. In this project, I took part in transferring historical data with SFTP, developing and improving the integration system.";

    }else{

      this.language = "English"

      this.summaryTitle0 = "Stajyer Mühendis | Intertech Bilgi İşlem ve Pazarlama Ticaret A.Ş. (07.2016-08.2016)";
      this.summaryTitle1 = "Yazılım Uzman Yardımcısı | Agito Software & Consulting (07.2017 - 02.2019 )";
      this.summaryTitle2 = "Yazılım Uzmanı | Agito Software & Consulting (02.2019 - 08.2019)";

      this.summaryDefinition0 = "Şirketin Alternatif Dağıtım Kanalları bölümünde Kullanıcı Deneyiminden sorumlulu ekipte görev aldım.  Ms Sql ve Asp.Net ile web uygulaması geliştirdim.";
      this.summaryDefinition1 = "Birden fazla sağlık sigortası şirketine geliştirmeler sağlayan Proje ve Ek Kapsam ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Oracle Database ve PL/SQL ile backend geliştirmede, IIS, ASP.NET ile web uygulaması ve Soap tabanlı web servisleri üzerine geliştirmelerde bulundum. BNP Paribas Cardif sigortacılık şirket için yazılım geliştirme ekibinde Yazılım Uzman Yardımcısı olarak görev aldım. Uygulama geliştirmede Oracle Database, PL/SQL, Oracle Forms Builder, Oracle Forms Reports ve Oracle Weblogic Server kullandım.";
      this.summaryDefinition2 = "NN Hayat ve Emeklilik şirketinde Outsource Yazılım Uzmanı olarak görev alıyorum. ING Bank ile NN Hayat ve Emeklilik arasında veri entegrasyonu porjesinde Oracle Database ve PL/SQL ile backend yazılımcı olarak geliştirmeler ve iyileştirme çalışmaları yapıyorum.";

      this.summaryDefinitionCollapse2= "NN Hayat ve Emeklilik Veri Entegrasyonu | PL/SQL NN Hayat ve Emeklilik ile ING Bank arasında veri entegrasyonu projesinde backend yazılımcı olarak görev alıyorum. NN Hayat ve Emeklilik verileri anlık olarak kayıt edilip daha sonra asenkron bir yapı ile kontrolü sağlanıp ING Bank sistemi ile entegrasyonu sağlanmaktadır. Bu projede geçmiş verilerin SFTP ile aktarılmasında, sistemin geliştirilmesinde ve iyileştirilmesinde görev aldım.";


    } 
  }

}
