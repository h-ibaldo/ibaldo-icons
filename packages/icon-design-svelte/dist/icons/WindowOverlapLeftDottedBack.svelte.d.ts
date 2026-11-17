import { SvelteComponent } from 'svelte';

export interface WindowOverlapLeftDottedBackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowOverlapLeftDottedBack extends SvelteComponent<WindowOverlapLeftDottedBackProps> {}
