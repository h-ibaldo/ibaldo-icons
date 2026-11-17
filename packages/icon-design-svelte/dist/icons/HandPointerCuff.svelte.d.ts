import { SvelteComponent } from 'svelte';

export interface HandPointerCuffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandPointerCuff extends SvelteComponent<HandPointerCuffProps> {}
