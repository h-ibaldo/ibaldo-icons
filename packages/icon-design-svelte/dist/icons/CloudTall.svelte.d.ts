import { SvelteComponent } from 'svelte';

export interface CloudTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudTall extends SvelteComponent<CloudTallProps> {}
