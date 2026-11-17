import { SvelteComponent } from 'svelte';

export interface WindowPlayCenterPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPlayCenterPlain extends SvelteComponent<WindowPlayCenterPlainProps> {}
