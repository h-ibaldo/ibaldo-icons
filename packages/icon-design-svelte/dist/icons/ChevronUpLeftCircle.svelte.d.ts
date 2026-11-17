import { SvelteComponent } from 'svelte';

export interface ChevronUpLeftCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpLeftCircle extends SvelteComponent<ChevronUpLeftCircleProps> {}
