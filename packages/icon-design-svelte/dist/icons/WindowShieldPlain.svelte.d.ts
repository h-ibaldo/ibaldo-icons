import { SvelteComponent } from 'svelte';

export interface WindowShieldPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowShieldPlain extends SvelteComponent<WindowShieldPlainProps> {}
