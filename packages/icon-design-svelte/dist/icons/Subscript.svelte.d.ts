import { SvelteComponent } from 'svelte';

export interface SubscriptProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Subscript extends SvelteComponent<SubscriptProps> {}
