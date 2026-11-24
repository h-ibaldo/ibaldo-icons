import { SvelteComponent } from 'svelte';

export interface WindowMenuPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMenuPlain extends SvelteComponent<WindowMenuPlainProps> {}
