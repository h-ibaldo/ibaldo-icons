import { SvelteComponent } from 'svelte';

export interface ChevronUpCircleProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronUpCircle extends SvelteComponent<ChevronUpCircleProps> {}
