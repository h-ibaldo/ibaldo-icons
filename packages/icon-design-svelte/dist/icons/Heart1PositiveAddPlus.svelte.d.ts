import { SvelteComponent } from 'svelte';

export interface Heart1PositiveAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart1PositiveAddPlus extends SvelteComponent<Heart1PositiveAddPlusProps> {}
