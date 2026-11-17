import { SvelteComponent } from 'svelte';

export interface WindowDotsCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDotsCircle extends SvelteComponent<WindowDotsCircleProps> {}
