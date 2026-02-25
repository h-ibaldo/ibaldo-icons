import { SvelteComponent } from 'svelte';

export interface Heart2PositiveAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart2PositiveAddPlus extends SvelteComponent<Heart2PositiveAddPlusProps> {}
