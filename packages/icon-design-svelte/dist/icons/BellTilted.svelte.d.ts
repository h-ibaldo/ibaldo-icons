import { SvelteComponent } from 'svelte';

export interface BellTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BellTilted extends SvelteComponent<BellTiltedProps> {}
