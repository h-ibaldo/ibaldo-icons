import { SvelteComponent } from 'svelte';

export interface WindowHeartCenterBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowHeartCenterBare extends SvelteComponent<WindowHeartCenterBareProps> {}
