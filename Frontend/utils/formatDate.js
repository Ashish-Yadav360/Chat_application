const formatDate = (date) => {
    const options = {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false // Use 24-hour format
    };
    return date.toLocaleString('en-US', options).replace(',', '');
  };
  
  export default formatDate;
  