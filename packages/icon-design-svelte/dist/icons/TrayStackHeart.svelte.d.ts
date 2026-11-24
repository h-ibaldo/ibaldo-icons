import { SvelteComponent } from 'svelte';

export interface TrayStackHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrayStackHeart extends SvelteComponent<TrayStackHeartProps> {}
