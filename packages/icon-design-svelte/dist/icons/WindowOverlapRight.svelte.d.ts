import { SvelteComponent } from 'svelte';

export interface WindowOverlapRightProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowOverlapRight extends SvelteComponent<WindowOverlapRightProps> {}
