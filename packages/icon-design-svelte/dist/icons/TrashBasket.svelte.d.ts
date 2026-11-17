import { SvelteComponent } from 'svelte';

export interface TrashBasketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashBasket extends SvelteComponent<TrashBasketProps> {}
