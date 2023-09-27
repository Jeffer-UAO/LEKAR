import { useState } from "react";

export function useWhatsApp() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = ["+573104004309", "+573207713003", "+573123662711"];

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const generateWhatsAppLink = (phoneNumber, message) => {
    const url = `https://wa.me/${phoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    return `${url}?text=${encodedMessage}`;
  };

  return {
    items,
    selectedItem,
    handleItemClick,
    generateWhatsAppLink,
  };
}
