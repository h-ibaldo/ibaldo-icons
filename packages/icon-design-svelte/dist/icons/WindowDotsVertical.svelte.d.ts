import { SvelteComponent } from 'svelte';

export interface WindowDotsVerticalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDotsVertical extends SvelteComponent<WindowDotsVerticalProps> {}
