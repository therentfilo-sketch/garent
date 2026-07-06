window.SITE_CONFIG = {
  siteName: "GARENT FİLO",
  siteTitle: "GARENT FİLO | Premium Araç Kiralama",
  whatsappNumber: "905545367956",
  callNumber: "905513722656",
  email: "info@garentfilo.com",
  city: "İstanbul, Türkiye",
  whatsappUrl(message = "") {
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${this.whatsappNumber}${text}`;
  }
};
