import { SvelteComponent } from 'svelte';

export interface Bell1CheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bell1Check extends SvelteComponent<Bell1CheckProps> {}
