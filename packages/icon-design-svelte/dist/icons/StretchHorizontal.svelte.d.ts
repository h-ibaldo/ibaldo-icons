import { SvelteComponent } from 'svelte';

export interface StretchHorizontalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class StretchHorizontal extends SvelteComponent<StretchHorizontalProps> {}
