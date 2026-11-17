import { SvelteComponent } from 'svelte';

export interface CloudOffProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudOff extends SvelteComponent<CloudOffProps> {}
