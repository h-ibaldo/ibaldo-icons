import { SvelteComponent } from 'svelte';

export interface CloudSendProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudSend extends SvelteComponent<CloudSendProps> {}
