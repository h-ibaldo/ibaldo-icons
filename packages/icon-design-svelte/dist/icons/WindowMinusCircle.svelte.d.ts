import { SvelteComponent } from 'svelte';

export interface WindowMinusCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMinusCircle extends SvelteComponent<WindowMinusCircleProps> {}
