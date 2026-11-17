import { SvelteComponent } from 'svelte';

export interface CloudHappyTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudHappyTall extends SvelteComponent<CloudHappyTallProps> {}
