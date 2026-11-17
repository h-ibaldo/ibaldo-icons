import { SvelteComponent } from 'svelte';

export interface WindowFastPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowFastPlain extends SvelteComponent<WindowFastPlainProps> {}
