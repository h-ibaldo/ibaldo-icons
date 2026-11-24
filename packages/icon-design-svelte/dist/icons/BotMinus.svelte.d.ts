import { SvelteComponent } from 'svelte';

export interface BotMinusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BotMinus extends SvelteComponent<BotMinusProps> {}
