import { SvelteComponent } from 'svelte';

export interface CloudRemoveProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudRemove extends SvelteComponent<CloudRemoveProps> {}
