import { SvelteComponent } from 'svelte';

export interface SupportProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Support extends SvelteComponent<SupportProps> {}
