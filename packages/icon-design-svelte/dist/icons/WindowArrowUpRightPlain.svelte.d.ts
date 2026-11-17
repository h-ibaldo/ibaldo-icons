import { SvelteComponent } from 'svelte';

export interface WindowArrowUpRightPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowArrowUpRightPlain extends SvelteComponent<WindowArrowUpRightPlainProps> {}
