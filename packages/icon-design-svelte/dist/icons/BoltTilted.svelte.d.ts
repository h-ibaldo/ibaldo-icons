import { SvelteComponent } from 'svelte';

export interface BoltTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoltTilted extends SvelteComponent<BoltTiltedProps> {}
