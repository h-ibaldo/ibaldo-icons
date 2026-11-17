import { SvelteComponent } from 'svelte';

export interface WindowEditPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowEditPlain extends SvelteComponent<WindowEditPlainProps> {}
