import { SvelteComponent } from 'svelte';

export interface WindowListPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListPlain extends SvelteComponent<WindowListPlainProps> {}
