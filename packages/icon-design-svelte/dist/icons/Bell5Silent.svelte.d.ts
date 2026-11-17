import { SvelteComponent } from 'svelte';

export interface Bell5SilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell5Silent extends SvelteComponent<Bell5SilentProps> {}
