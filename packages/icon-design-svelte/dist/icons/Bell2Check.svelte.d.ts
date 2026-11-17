import { SvelteComponent } from 'svelte';

export interface Bell2CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell2Check extends SvelteComponent<Bell2CheckProps> {}
