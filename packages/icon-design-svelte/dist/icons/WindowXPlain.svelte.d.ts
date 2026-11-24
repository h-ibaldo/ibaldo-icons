import { SvelteComponent } from 'svelte';

export interface WindowXPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowXPlain extends SvelteComponent<WindowXPlainProps> {}
