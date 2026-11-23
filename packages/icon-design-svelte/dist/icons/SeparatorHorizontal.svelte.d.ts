import { SvelteComponent } from 'svelte';

export interface SeparatorHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SeparatorHorizontal extends SvelteComponent<SeparatorHorizontalProps> {}
