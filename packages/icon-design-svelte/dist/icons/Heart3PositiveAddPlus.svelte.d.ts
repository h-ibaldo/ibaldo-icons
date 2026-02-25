import { SvelteComponent } from 'svelte';

export interface Heart3PositiveAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Heart3PositiveAddPlus extends SvelteComponent<Heart3PositiveAddPlusProps> {}
