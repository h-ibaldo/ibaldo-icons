import { SvelteComponent } from 'svelte';

export interface PaidSearchLupeDollarSignProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PaidSearchLupeDollarSign extends SvelteComponent<PaidSearchLupeDollarSignProps> {}
