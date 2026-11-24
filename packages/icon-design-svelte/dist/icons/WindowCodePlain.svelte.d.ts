import { SvelteComponent } from 'svelte';

export interface WindowCodePlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCodePlain extends SvelteComponent<WindowCodePlainProps> {}
