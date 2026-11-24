import { SvelteComponent } from 'svelte';

export interface WindowRocketProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowRocket extends SvelteComponent<WindowRocketProps> {}
