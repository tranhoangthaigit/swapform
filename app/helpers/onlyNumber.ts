export const onlyDecimal = (value: string) => {
    const decimalMatch = value.match(/\d+(\.\d+)?/);
    return decimalMatch ? decimalMatch[0] : "";
  };