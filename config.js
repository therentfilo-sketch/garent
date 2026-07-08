window.SITE_CONFIG = {
  siteName: "GARENT FİLO",
  siteTitle: "GARENT FİLO | Türkiye Geneli Araç Kiralama",
  whatsappNumber: "905545367956",
  callNumber: "905513722656",
  email: "info@garentfilo.com",
  city: "Türkiye Geneli",

  buttons: {
    headerWhatsApp: "WhatsApp",
    headerCall: "Hemen Ara",
    heroReservation: "Rezervasyon Oluştur",
    heroWhatsApp: "WhatsApp",
    filter: "Filtrele",
    cardReservation: "Rezervasyon Oluştur",
    cardWhatsApp: "WhatsApp",
    cardCall: "Ara",
    cardDetail: "Detayları Gör",
    modalCancel: "İptal",
    modalSubmit: "WhatsApp'tan Gönder",
    detailReservation: "Hemen Kirala",
    detailWhatsApp: "WhatsApp"
  },

  messages: {
    headerWhatsApp: "Merhaba, GARENT FİLO hakkında bilgi almak istiyorum.",
    heroWhatsApp: "Merhaba, Türkiye geneli araç kiralama hizmetleri hakkında bilgi almak istiyorum.",
    vehicleWhatsApp(vehicleName) {
      return `Merhaba, ${vehicleName} aracı hakkında bilgi almak istiyorum.`;
    },
    reservationSuccess: "Rezervasyon talebiniz WhatsApp üzerinden gönderildi. En kısa sürede dönüş yapacağız."
  },

  whatsappUrl(message = "") {
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${this.whatsappNumber}${text}`;
  },

  callUrl() {
    return `tel:+${this.callNumber}`;
  }
};
