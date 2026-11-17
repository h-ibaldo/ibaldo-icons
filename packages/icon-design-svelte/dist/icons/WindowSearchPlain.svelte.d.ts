import { SvelteComponent } from 'svelte';

export interface WindowSearchPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowSearchPlain extends SvelteComponent<WindowSearchPlainProps> {}
