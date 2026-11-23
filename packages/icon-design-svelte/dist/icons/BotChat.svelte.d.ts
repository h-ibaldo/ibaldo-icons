import { SvelteComponent } from 'svelte';

export interface BotChatProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BotChat extends SvelteComponent<BotChatProps> {}
