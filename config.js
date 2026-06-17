const SITE_CONFIG = {
  siteName: "GARENT FİLO",
  siteTitle: "GARENT FİLO | Premium Araç Kiralama",
  whatsappNumber: "905019558524",
  callNumber: "905019558524",
  email: "info@garentfilo.com",
  city: " Türkiye",
  whatsappUrl(message = "") {
    const text = message ? `?text=${encodeURIComponent(message)}` : "";
    return `https://wa.me/${this.whatsappNumber}${text}`;
  }
};
