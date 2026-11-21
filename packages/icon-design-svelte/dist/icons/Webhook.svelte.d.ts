import { SvelteComponent } from 'svelte';

export interface WebhookProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Webhook extends SvelteComponent<WebhookProps> {}
