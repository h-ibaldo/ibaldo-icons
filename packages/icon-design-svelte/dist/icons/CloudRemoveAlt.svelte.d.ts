import { SvelteComponent } from 'svelte';

export interface CloudRemoveAltProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudRemoveAlt extends SvelteComponent<CloudRemoveAltProps> {}
