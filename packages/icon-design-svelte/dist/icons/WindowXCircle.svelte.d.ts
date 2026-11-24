import { SvelteComponent } from 'svelte';

export interface WindowXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowXCircle extends SvelteComponent<WindowXCircleProps> {}
