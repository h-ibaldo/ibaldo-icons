import { SvelteComponent } from 'svelte';

export interface HandThumbUpCuffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandThumbUpCuff extends SvelteComponent<HandThumbUpCuffProps> {}
