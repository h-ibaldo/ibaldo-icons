import { SvelteComponent } from 'svelte';

export interface HandThumbDownCuffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class HandThumbDownCuff extends SvelteComponent<HandThumbDownCuffProps> {}
