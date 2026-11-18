import { SvelteComponent } from 'svelte';

export interface WindowListPlusPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListPlusPlain extends SvelteComponent<WindowListPlusPlainProps> {}
