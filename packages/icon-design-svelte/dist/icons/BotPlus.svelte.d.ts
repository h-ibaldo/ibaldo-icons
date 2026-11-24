import { SvelteComponent } from 'svelte';

export interface BotPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BotPlus extends SvelteComponent<BotPlusProps> {}
