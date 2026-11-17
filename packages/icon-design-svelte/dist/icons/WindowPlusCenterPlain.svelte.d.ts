import { SvelteComponent } from 'svelte';

export interface WindowPlusCenterPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlusCenterPlain extends SvelteComponent<WindowPlusCenterPlainProps> {}
