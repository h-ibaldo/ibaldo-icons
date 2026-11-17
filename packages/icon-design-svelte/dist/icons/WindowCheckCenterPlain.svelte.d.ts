import { SvelteComponent } from 'svelte';

export interface WindowCheckCenterPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowCheckCenterPlain extends SvelteComponent<WindowCheckCenterPlainProps> {}
