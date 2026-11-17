import { SvelteComponent } from 'svelte';

export interface WindowMedalBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowMedalBare extends SvelteComponent<WindowMedalBareProps> {}
