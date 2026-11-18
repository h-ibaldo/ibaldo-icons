import { SvelteComponent } from 'svelte';

export interface AnchorBarbedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class AnchorBarbed extends SvelteComponent<AnchorBarbedProps> {}
