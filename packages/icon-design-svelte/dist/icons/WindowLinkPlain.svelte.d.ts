import { SvelteComponent } from 'svelte';

export interface WindowLinkPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowLinkPlain extends SvelteComponent<WindowLinkPlainProps> {}
