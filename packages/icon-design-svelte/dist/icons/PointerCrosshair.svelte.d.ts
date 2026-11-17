import { SvelteComponent } from 'svelte';

export interface PointerCrosshairProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class PointerCrosshair extends SvelteComponent<PointerCrosshairProps> {}
