import { SvelteComponent } from 'svelte';

export interface GripDotsHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GripDotsHorizontal extends SvelteComponent<GripDotsHorizontalProps> {}
