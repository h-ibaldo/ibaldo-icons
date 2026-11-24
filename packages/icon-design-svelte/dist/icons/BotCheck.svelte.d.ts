import { SvelteComponent } from 'svelte';

export interface BotCheckProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BotCheck extends SvelteComponent<BotCheckProps> {}
