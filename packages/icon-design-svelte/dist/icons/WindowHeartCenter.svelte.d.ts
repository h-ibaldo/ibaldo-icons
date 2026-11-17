import { SvelteComponent } from 'svelte';

export interface WindowHeartCenterProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowHeartCenter extends SvelteComponent<WindowHeartCenterProps> {}
