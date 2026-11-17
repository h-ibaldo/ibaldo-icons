import { SvelteComponent } from 'svelte';

export interface WindowXCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowXCenter extends SvelteComponent<WindowXCenterProps> {}
