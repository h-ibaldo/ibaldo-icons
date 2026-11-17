import { SvelteComponent } from 'svelte';

export interface WindowMinusCenterPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMinusCenterPlain extends SvelteComponent<WindowMinusCenterPlainProps> {}
