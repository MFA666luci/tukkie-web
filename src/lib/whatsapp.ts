export const WHATSAPP_NUMBER = "6285113232315";

export const WHATSAPP_DISPLAY = "+62 851-1323-2315";

export function buildOrderMessage(qty = 1): string {
  return [
    "Halo Tukkie! Saya ingin memesan:",
    "",
    "Produk: Getuk Goreng (Cokelat & Oreo)",
    "Harga: Rp5.000/porsi",
    `Jumlah: ${qty} porsi`,
    "",
    "Mohon informasi lebih lanjut. Terima kasih!",
  ].join("\n");
}

export function buildWhatsAppUrl(qty = 1): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildOrderMessage(qty),
  )}`;
}
