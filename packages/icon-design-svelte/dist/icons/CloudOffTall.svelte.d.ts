import { SvelteComponent } from 'svelte';

export interface CloudOffTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudOffTall extends SvelteComponent<CloudOffTallProps> {}
