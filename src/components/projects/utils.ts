const formatter = new Intl.NumberFormat('en-NG', {
  style: 'currency',
  currency: 'NGN',
  maximumFractionDigits: 0,
});

export const formatNaira = (amount: number) => formatter.format(amount);

export const progressPercent = (raised: number, goal: number) =>
  Math.min(100, Math.round((raised / goal) * 100));
