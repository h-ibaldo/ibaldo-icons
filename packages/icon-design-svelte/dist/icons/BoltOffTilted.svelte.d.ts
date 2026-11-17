import { SvelteComponent } from 'svelte';

export interface BoltOffTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BoltOffTilted extends SvelteComponent<BoltOffTiltedProps> {}
