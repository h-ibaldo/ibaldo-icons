import { SvelteComponent } from 'svelte';

export interface WindowDotsCircleBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowDotsCircleBare extends SvelteComponent<WindowDotsCircleBareProps> {}
