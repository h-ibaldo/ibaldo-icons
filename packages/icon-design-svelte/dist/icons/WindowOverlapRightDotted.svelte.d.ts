import { SvelteComponent } from 'svelte';

export interface WindowOverlapRightDottedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowOverlapRightDotted extends SvelteComponent<WindowOverlapRightDottedProps> {}
