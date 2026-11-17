import { SvelteComponent } from 'svelte';

export interface BrowserWindowRabbitProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BrowserWindowRabbit extends SvelteComponent<BrowserWindowRabbitProps> {}
