import { SvelteComponent } from 'svelte';

export interface CloudEyeTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudEyeTall extends SvelteComponent<CloudEyeTallProps> {}
