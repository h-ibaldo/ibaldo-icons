import { SvelteComponent } from 'svelte';

export interface WindowListXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListXCircle extends SvelteComponent<WindowListXCircleProps> {}
