import { SvelteComponent } from 'svelte';

export interface JustifyTopProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class JustifyTop extends SvelteComponent<JustifyTopProps> {}
