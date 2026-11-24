import { SvelteComponent } from 'svelte';

export interface WindowHeartBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowHeartBare extends SvelteComponent<WindowHeartBareProps> {}
