import { SvelteComponent } from 'svelte';

export interface CloudPlusTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudPlusTall extends SvelteComponent<CloudPlusTallProps> {}
