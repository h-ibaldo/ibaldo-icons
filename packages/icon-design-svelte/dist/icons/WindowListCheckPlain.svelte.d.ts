import { SvelteComponent } from 'svelte';

export interface WindowListCheckPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowListCheckPlain extends SvelteComponent<WindowListCheckPlainProps> {}
