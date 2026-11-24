import { SvelteComponent } from 'svelte';

export interface WindowMenuListPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMenuListPlain extends SvelteComponent<WindowMenuListPlainProps> {}
