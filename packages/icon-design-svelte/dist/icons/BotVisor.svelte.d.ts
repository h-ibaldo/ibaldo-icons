import { SvelteComponent } from 'svelte';

export interface BotVisorProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BotVisor extends SvelteComponent<BotVisorProps> {}
