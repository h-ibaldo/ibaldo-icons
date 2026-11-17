import { SvelteComponent } from 'svelte';

export interface Bell1SilentProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1Silent extends SvelteComponent<Bell1SilentProps> {}
