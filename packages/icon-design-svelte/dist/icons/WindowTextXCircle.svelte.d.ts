import { SvelteComponent } from 'svelte';

export interface WindowTextXCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowTextXCircle extends SvelteComponent<WindowTextXCircleProps> {}
