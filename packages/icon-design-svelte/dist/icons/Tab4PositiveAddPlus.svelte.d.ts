import { SvelteComponent } from 'svelte';

export interface Tab4PositiveAddPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Tab4PositiveAddPlus extends SvelteComponent<Tab4PositiveAddPlusProps> {}
