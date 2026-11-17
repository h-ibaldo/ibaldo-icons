import { SvelteComponent } from 'svelte';

export interface SupportOvalProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class SupportOval extends SvelteComponent<SupportOvalProps> {}
