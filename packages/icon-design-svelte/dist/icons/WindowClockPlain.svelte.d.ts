import { SvelteComponent } from 'svelte';

export interface WindowClockPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowClockPlain extends SvelteComponent<WindowClockPlainProps> {}
