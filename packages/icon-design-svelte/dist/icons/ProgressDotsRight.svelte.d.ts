import { SvelteComponent } from 'svelte';

export interface ProgressDotsRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ProgressDotsRight extends SvelteComponent<ProgressDotsRightProps> {}
