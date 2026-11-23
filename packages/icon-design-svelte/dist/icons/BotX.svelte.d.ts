import { SvelteComponent } from 'svelte';

export interface BotXProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BotX extends SvelteComponent<BotXProps> {}
