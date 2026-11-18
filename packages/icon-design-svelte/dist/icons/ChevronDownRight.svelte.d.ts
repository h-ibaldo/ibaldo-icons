import { SvelteComponent } from 'svelte';

export interface ChevronDownRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChevronDownRight extends SvelteComponent<ChevronDownRightProps> {}
