import { SvelteComponent } from 'svelte';

export interface GripDotsVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class GripDotsVertical extends SvelteComponent<GripDotsVerticalProps> {}
