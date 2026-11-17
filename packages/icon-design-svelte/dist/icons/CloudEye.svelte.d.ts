import { SvelteComponent } from 'svelte';

export interface CloudEyeProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudEye extends SvelteComponent<CloudEyeProps> {}
