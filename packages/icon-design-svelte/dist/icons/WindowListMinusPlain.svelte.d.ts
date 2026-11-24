import { SvelteComponent } from 'svelte';

export interface WindowListMinusPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListMinusPlain extends SvelteComponent<WindowListMinusPlainProps> {}
