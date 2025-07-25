// src/utils/formatters.js
export const formatPhoneNumber = (phone) => {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    return `+${cleaned}`;
  };
  
  export const formatCurrency = (amount) => {
    if (!amount) return '';
    return new Intl.NumberFormat('fr-FR').format(amount);
  };