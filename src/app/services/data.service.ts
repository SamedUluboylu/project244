import { Injectable } from '@angular/core';
import { TeamMember } from '../models/team-member.model';
import { Service } from '../models/service.model';
import { Project } from '../models/project.model';
import { Testimonial } from '../models/testimonial.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  getTeamMembers(): TeamMember[] {
    return [
      {
        id: 1,
        name: 'Ahmet Yılmaz',
        position: 'Full Stack Developer',
        description: 'Modern web teknolojileri ve backend sistemleri konusunda uzman.',
        photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        id: 2,
        name: 'Ayşe Demir',
        position: 'Frontend Developer',
        description: 'Angular ve React ile kullanıcı dostu arayüzler geliştiriyor.',
        photo: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        id: 3,
        name: 'Mehmet Kaya',
        position: 'Mobile Developer',
        description: 'iOS ve Android platformları için native ve hybrid uygulamalar geliştiriyor.',
        photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      },
      {
        id: 4,
        name: 'Zeynep Şahin',
        position: 'UI/UX Designer',
        description: 'Kullanıcı deneyimi odaklı modern ve estetik tasarımlar oluşturuyor.',
        photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
        linkedin: 'https://linkedin.com',
        github: 'https://github.com'
      }
    ];
  }

  getServices(): Service[] {
  return [
    {
      id: 1,
      title: 'Sistem ve Network Çözümleri',
      description: `Sunucu, storage ve network cihazı kurulumları  
Sistem odası tasarımı ve altyapı planlaması  
Switch, router, firewall ve güvenlik yapılandırmaları  
Ağ izleme, performans optimizasyonu ve kablolama çözümleri`,
      icon: '🌐'
    },
    {
      id: 2,
      title: 'Sanallaştırma ve Bulut Hizmetleri',
      description: `VMware, Hyper-V, Proxmox sanallaştırma altyapıları  
Yedekleme ve felaket kurtarma (Disaster Recovery - DR) sistemleri  
Bulut tabanlı sunucu, e-posta ve depolama hizmetleri  
Yüksek erişilebilirlik (HA) ve ölçeklenebilir altyapı çözümleri`,
      icon: '☁️'
    },
    {
      id: 3,
      title: 'Bakım ve Destek Hizmetleri',
      description: `Yerinde veya uzaktan IT destek hizmetleri  
Sistem izleme, güncelleme ve sorun giderme  
Donanım ve yazılım bakım anlaşmaları  
Kesintisiz iş sürekliliği için proaktif yönetim`,
      icon: '🔧'
    },
    {
      id: 4,
      title: 'Web Tasarım ve Yazılım Geliştirme',
      description: `Modern, mobil uyumlu ve kullanıcı odaklı web siteleri  
Kurumsal web tasarımı, SEO ve içerik yönetimi  
Özel yazılım ve otomasyon çözümleri  
Web tabanlı uygulama ve entegrasyon geliştirme`,
      icon: '💻'
    },
    {
      id: 5,
      title: 'Cihaz ve Donanım Tedariği',
      description: `Sunucu, network cihazı, bilgisayar ve çevre birimleri temini  
Lisanslı ürün, garanti ve kurulum desteği  
Kurumsal ihtiyaçlara özel donanım planlama  
Tüm marka ve modellerde uygun tedarik çözümleri`,
      icon: '🖥️'
    },
    {
      id: 6,
      title: 'Danışmanlık Hizmetleri',
      description: `IT altyapı analizi, modernizasyon ve planlama  
Siber güvenlik ve veri koruma danışmanlığı  
Yazılım, lisanslama ve dijital dönüşüm stratejileri  
Teknoloji yatırımlarında doğru yönlendirme ve proje yönetimi`,
      icon: '💡'
    },
    {
      id: 7,
      title: 'Yazılım ve Entegrasyon Çözümleri',
      description: `Kurumsal iş süreçlerine özel yazılım geliştirme  
API ve veri entegrasyon sistemleri  
ERP, CRM ve diğer platformlarla bağlantı çözümleri  
Otomasyon, raporlama ve verimlilik uygulamaları`,
      icon: '⚙️'
    },
    {
      id: 8,
      title: 'Sistem Odası ve Altyapı Tasarımı',
      description: `Yeni projeler için uçtan uca sistem odası tasarımı  
Enerji, iklimlendirme, kabin, kablolama ve güvenlik altyapısı  
Yedekli, ölçeklenebilir ve yönetilebilir sistem odası çözümleri  
Standartlara uygun profesyonel kurulum ve test süreçleri`,
      icon: '🏗️'
    }
  ];
}


getProjects(): Project[] {
  return [
    // {
    //   id: 1,
    //   name: 'E-Ticaret Platform',
    //   description: 'Kurumsal seviyede e-ticaret çözümü. Ürün, stok, sipariş, ödeme ve kargo süreçlerinin tek panelden yönetilmesi.',
    //   technologies: ['.NET Core', 'Angular', 'MSSQL'],
    //   image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    // {
    //   id: 2,
    //   name: 'Sağlık Yönetim Sistemi',
    //   description: 'Hasta takibi, randevu yönetimi ve elektronik sağlık kayıtları için kapsamlı yönetim sistemi.',
    //   technologies: ['.NET Core', 'Angular', 'MSSQL'],
    //   image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    // {
    //   id: 3,
    //   name: 'Mobil Finans Uygulaması',
    //   description: 'Kullanıcı dostu arayüz ile harcama takibi, bütçe yönetimi ve finansal raporlama.',
    //   technologies: ['.NET Core', 'Angular', 'MSSQL'],
    //   image: 'https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    // {
    //   id: 4,
    //   name: 'CRM Dashboard',
    //   description: 'Müşteri ilişkileri yönetimi için gelişmiş dashboard, müşteri takibi ve analitik araçlar.',
    //   technologies: ['.NET Core', 'Angular', 'MSSQL'],
    //   image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    // {
    //   id: 5,
    //   name: 'Eğitim Platformu (LMS)',
    //   description: 'Online eğitim videoları, sınavlar, soru bankası ve sertifika sistemi ile modern LMS çözümü.',
    //   technologies: ['.NET Core', 'Angular', 'MSSQL'],
    //   image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    // {
    //   id: 6,
    //   name: 'IoT Dashboard',
    //   description: 'Gerçek zamanlı IoT cihaz yönetimi, telemetri takibi ve veri görselleştirme platformu.',
    //   technologies: ['.NET Core', 'Angular', 'MSSQL'],
    //   image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },

    /* ------------------ EKLENEN PROJE TÜRLERİ ------------------ */

    {
      id: 7,
      name: 'Restoran & Kafe Yönetim Sistemi',
      description: 'Masa yönetimi, QR menü, sipariş, paket servis, mutfak ekranı ve POS entegrasyonlu restoran çözümü.',
      technologies: ['.NET Core', 'Angular', 'MSSQL'],
      image: 'https://images.pexels.com/photos/546093/pexels-photo-546093.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 8,
      name: 'API Entegrasyon Platformu',
      description: '3. parti servisler, ERP, CRM ve ödeme sistemleri ile entegre API yönetim altyapısı.',
      technologies: ['.NET Core', 'Angular', 'MSSQL'],
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 9,
      name: 'Dashboard & Raporlama Sistemi',
      description: 'Gerçek zamanlı grafikler, KPI analizleri ve kullanıcıya özel raporlama modülleri.',
      technologies: ['.NET Core', 'Angular', 'MSSQL'],
      image: 'https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    // {
    //   id: 10,
    //   name: 'Yetkilendirme & Kimlik Yönetimi',
    //   description: 'JWT, OAuth ve role-based access control ile güvenli kimlik yönetim sistemi.',
    //   technologies: ['.NET Core', 'Angular', 'MSSQL'],
    //   image: 'https://images.pexels.com/photos/5380592/pexels-photo-5380592.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    {
      id: 11,
      name: 'Belge Yönetimi & Dosya Arşivleme',
      description: 'PDF, görsel, video yükleme, görüntüleme, kategorileme ve versiyonlama sistemi.',
      technologies: ['.NET Core', 'Angular', 'MSSQL'],
      image: 'https://images.pexels.com/photos/267586/pexels-photo-267586.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    // {
    //   id: 12,
    //   name: 'Dinamik Form & Süreç Otomasyonu',
    //   description: 'Sürükle-bırak form oluşturma, çok adımlı onay süreçleri ve workflow yönetimi.',
    //   technologies: ['.NET Core', 'Angular', 'MSSQL'],
    //   image: 'https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=400'
    // },
    {
      id: 13,
      name: 'Personel & Bordro Takip Sistemi',
      description: 'Personel yönetimi, izin takibi, maaş bordrosu ve performans değerlendirme sistemi.',
      technologies: ['.NET Core', 'Angular', 'MSSQL'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 14,
      name: 'Rezervasyon & Randevu Yönetim Sistemi',
      description: 'Takvim bazlı randevu yönetimi, otomatik bildirimler ve ileri düzey kullanıcı yönetimi.',
      technologies: ['.NET Core', 'Angular', 'MSSQL'],
      image: 'https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
        {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    },
  {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    } ,  
            {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    }  ,        {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    }    ,      {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    }    ,      {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    }    ,      {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    }    ,      {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    }    ,      {
      id: 14,
      name: '',
      description: '',
      technologies: [''],
      image: ''
    }   
  ];
}


  getTestimonials(): Testimonial[] {
    return [
      {
        id: 1,
        name: 'Can Özdemir',
        position: 'CEO',
        company: 'TechStart A.Ş.',
        text: '',
        avatar: 'assets/images/rotamat.png'
      },
      {
        id: 2,
        name: 'Elif Arslan',
        position: 'Ürün Müdürü',
        company: 'Digital Medya',
        text: 'Profesyonel yaklaşımları ve teknik bilgileri sayesinde projemiz başarıyla tamamlandı.',
        avatar: 'assets/images/yedikita.png'
      },
      {
        id: 3,
        name: 'Burak Yıldız',
        position: 'CTO',
        company: 'E-Commerce Pro',
        text: 'Hem teknik hem de iletişim konusunda mükemmel bir ekip. Kesinlikle tavsiye ediyorum.',
        avatar: 'assets/images/hukuk.png'
      },
      {
        id: 4,
        name: 'Burak Yıldız',
        position: 'CTO',
        company: 'E-Commerce Pro',
        text: 'Hem teknik hem de iletişim konusunda mükemmel bir ekip. Kesinlikle tavsiye ediyorum.',
        avatar: 'assets/images/bnc.png'
      },
      {
        id: 5,
        name: 'Burak Yıldız',
        position: 'CTO',
        company: 'E-Commerce Pro',
        text: 'Hem teknik hem de iletişim konusunda mükemmel bir ekip. Kesinlikle tavsiye ediyorum.',
        avatar: 'assets/images/tem.png'
      }
    ];
  }
}
