import { SvelteComponent } from 'svelte';

export interface DotsVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class DotsVertical extends SvelteComponent<DotsVerticalProps> {}
