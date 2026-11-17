import { SvelteComponent } from 'svelte';

export interface WindowRosetteProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowRosette extends SvelteComponent<WindowRosetteProps> {}
