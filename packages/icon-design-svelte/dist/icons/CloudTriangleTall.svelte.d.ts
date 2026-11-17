import { SvelteComponent } from 'svelte';

export interface CloudTriangleTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudTriangleTall extends SvelteComponent<CloudTriangleTallProps> {}
