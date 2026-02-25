import { SvelteComponent } from 'svelte';

export interface Tab1PositiveAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab1PositiveAddPlus extends SvelteComponent<Tab1PositiveAddPlusProps> {}
