import { SvelteComponent } from 'svelte';

export interface CloudMailTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMailTall extends SvelteComponent<CloudMailTallProps> {}
