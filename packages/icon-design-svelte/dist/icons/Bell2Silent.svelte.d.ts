import { SvelteComponent } from 'svelte';

export interface Bell2SilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Silent extends SvelteComponent<Bell2SilentProps> {}
