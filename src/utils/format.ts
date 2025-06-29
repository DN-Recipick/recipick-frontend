export const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);

  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);
};
export const formatNumber = (price: string | number): string => Number(price).toLocaleString();
