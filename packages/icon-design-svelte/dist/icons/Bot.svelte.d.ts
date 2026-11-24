import { SvelteComponent } from 'svelte';

export interface BotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Bot extends SvelteComponent<BotProps> {}
