import { SvelteComponent } from 'svelte';

export interface WindowStarCenterPlainProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowStarCenterPlain extends SvelteComponent<WindowStarCenterPlainProps> {}
