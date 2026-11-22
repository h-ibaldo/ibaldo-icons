import { SvelteComponent } from 'svelte';

export interface SplitLeftRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SplitLeftRight extends SvelteComponent<SplitLeftRightProps> {}
