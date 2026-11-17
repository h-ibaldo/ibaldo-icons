import { SvelteComponent } from 'svelte';

export interface WindowCheckCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCheckCircle extends SvelteComponent<WindowCheckCircleProps> {}
