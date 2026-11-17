import { SvelteComponent } from 'svelte';

export interface WindowPasswordProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class WindowPassword extends SvelteComponent<WindowPasswordProps> {}
