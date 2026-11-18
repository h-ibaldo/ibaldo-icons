import { SvelteComponent } from 'svelte';

export interface ArrowUpLeftDownRightCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpLeftDownRightCircle extends SvelteComponent<ArrowUpLeftDownRightCircleProps> {}
