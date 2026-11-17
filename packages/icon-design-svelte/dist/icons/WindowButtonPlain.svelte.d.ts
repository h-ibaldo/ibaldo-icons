import { SvelteComponent } from 'svelte';

export interface WindowButtonPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowButtonPlain extends SvelteComponent<WindowButtonPlainProps> {}
