import { SvelteComponent } from 'svelte';

export interface CloudMinusTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMinusTall extends SvelteComponent<CloudMinusTallProps> {}
