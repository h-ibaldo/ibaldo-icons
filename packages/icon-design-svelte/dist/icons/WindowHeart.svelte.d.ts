import { SvelteComponent } from 'svelte';

export interface WindowHeartProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowHeart extends SvelteComponent<WindowHeartProps> {}
