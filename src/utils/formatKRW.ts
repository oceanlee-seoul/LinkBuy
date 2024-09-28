export default function formatKRW(amount: number) {
  if (isNaN(amount)) {
    throw new Error('유효한 숫자를 입력하세요.');
  }

  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 원';
}
