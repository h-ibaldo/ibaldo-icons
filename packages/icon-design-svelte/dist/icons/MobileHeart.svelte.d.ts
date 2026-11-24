import { SvelteComponent } from 'svelte';

export interface MobileHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class MobileHeart extends SvelteComponent<MobileHeartProps> {}
