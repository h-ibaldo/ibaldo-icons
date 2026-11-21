import { SvelteComponent } from 'svelte';

export interface CrosshairProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Crosshair extends SvelteComponent<CrosshairProps> {}
