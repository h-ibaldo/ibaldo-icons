import { SvelteComponent } from 'svelte';

export interface WindowOverlapRightDottedBackProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowOverlapRightDottedBack extends SvelteComponent<WindowOverlapRightDottedBackProps> {}
