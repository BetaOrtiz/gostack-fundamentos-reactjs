const formatValue = (value: number): string => {
  const newValue = new Intl.NumberFormat('pt', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return newValue;
};

export default formatValue;
