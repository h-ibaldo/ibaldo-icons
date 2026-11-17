import { SvelteComponent } from 'svelte';

export interface CloudMailProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudMail extends SvelteComponent<CloudMailProps> {}
