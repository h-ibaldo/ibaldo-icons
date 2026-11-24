import { SvelteComponent } from 'svelte';

export interface WindowPlayPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlayPlain extends SvelteComponent<WindowPlayPlainProps> {}
