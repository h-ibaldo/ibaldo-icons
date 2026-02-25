import { SvelteComponent } from 'svelte';

export interface Tab3PositiveAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab3PositiveAddPlus extends SvelteComponent<Tab3PositiveAddPlusProps> {}
