import { SvelteComponent } from 'svelte';

export interface WindowArrowUpPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowArrowUpPlain extends SvelteComponent<WindowArrowUpPlainProps> {}
