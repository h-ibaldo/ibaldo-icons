import { SvelteComponent } from 'svelte';

export interface ArrowUpLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ArrowUpLeftCircle extends SvelteComponent<ArrowUpLeftCircleProps> {}
