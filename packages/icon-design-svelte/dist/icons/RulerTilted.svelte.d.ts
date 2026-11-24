import { SvelteComponent } from 'svelte';

export interface RulerTiltedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class RulerTilted extends SvelteComponent<RulerTiltedProps> {}
