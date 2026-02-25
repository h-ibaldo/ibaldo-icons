import { SvelteComponent } from 'svelte';

export interface Tab2PositiveAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab2PositiveAddPlus extends SvelteComponent<Tab2PositiveAddPlusProps> {}
