import { SvelteComponent } from 'svelte';

export interface WindowBanPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowBanPlain extends SvelteComponent<WindowBanPlainProps> {}
