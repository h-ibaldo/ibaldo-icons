import { SvelteComponent } from 'svelte';

export interface WindowXCenterPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowXCenterPlain extends SvelteComponent<WindowXCenterPlainProps> {}
