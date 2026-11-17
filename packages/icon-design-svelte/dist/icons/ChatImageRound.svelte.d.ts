import { SvelteComponent } from 'svelte';

export interface ChatImageRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatImageRound extends SvelteComponent<ChatImageRoundProps> {}
