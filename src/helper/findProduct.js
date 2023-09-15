export { findProduct };
import { instruments } from './products';

function findProduct(elem) {
  const prodId = Number(elem.closest('.js-list-item').dataset.id);
  return instruments.find(({ id }) => id === prodId);
}
