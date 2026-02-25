import { SvelteComponent } from 'svelte';

export interface HeartPositiveAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HeartPositiveAddPlus extends SvelteComponent<HeartPositiveAddPlusProps> {}
