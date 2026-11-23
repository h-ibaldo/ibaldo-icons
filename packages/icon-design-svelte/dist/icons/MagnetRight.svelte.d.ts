import { SvelteComponent } from 'svelte';

export interface MagnetRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MagnetRight extends SvelteComponent<MagnetRightProps> {}
