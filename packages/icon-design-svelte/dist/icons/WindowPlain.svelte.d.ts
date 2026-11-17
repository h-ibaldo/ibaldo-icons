import { SvelteComponent } from 'svelte';

export interface WindowPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlain extends SvelteComponent<WindowPlainProps> {}
