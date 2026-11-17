import { SvelteComponent } from 'svelte';

export interface CloudAddProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAdd extends SvelteComponent<CloudAddProps> {}
