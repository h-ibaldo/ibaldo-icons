import { SvelteComponent } from 'svelte';

export interface CloudSlashProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSlash extends SvelteComponent<CloudSlashProps> {}
