import { SvelteComponent } from 'svelte';

export interface MagnetProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Magnet extends SvelteComponent<MagnetProps> {}
