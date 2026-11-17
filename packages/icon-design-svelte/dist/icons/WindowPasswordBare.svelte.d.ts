import { SvelteComponent } from 'svelte';

export interface WindowPasswordBareProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPasswordBare extends SvelteComponent<WindowPasswordBareProps> {}
