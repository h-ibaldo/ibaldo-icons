import { SvelteComponent } from 'svelte';

export interface WindowListXPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListXPlain extends SvelteComponent<WindowListXPlainProps> {}
