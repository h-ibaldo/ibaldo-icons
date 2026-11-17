import { SvelteComponent } from 'svelte';

export interface DivideHollowProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DivideHollow extends SvelteComponent<DivideHollowProps> {}
