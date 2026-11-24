import { SvelteComponent } from 'svelte';

export interface WindowMedalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMedal extends SvelteComponent<WindowMedalProps> {}
