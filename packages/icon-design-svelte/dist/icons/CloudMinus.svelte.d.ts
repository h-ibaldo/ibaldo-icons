import { SvelteComponent } from 'svelte';

export interface CloudMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMinus extends SvelteComponent<CloudMinusProps> {}
