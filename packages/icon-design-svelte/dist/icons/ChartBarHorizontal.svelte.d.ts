import { SvelteComponent } from 'svelte';

export interface ChartBarHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChartBarHorizontal extends SvelteComponent<ChartBarHorizontalProps> {}
