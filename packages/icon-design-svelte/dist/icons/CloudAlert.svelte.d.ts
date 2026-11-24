import { SvelteComponent } from 'svelte';

export interface CloudAlertProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudAlert extends SvelteComponent<CloudAlertProps> {}
