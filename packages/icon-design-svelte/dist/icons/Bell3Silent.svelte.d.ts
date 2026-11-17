import { SvelteComponent } from 'svelte';

export interface Bell3SilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell3Silent extends SvelteComponent<Bell3SilentProps> {}
