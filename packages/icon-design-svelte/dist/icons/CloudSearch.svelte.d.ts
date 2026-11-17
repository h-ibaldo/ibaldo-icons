import { SvelteComponent } from 'svelte';

export interface CloudSearchProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSearch extends SvelteComponent<CloudSearchProps> {}
