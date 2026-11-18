import { SvelteComponent } from 'svelte';

export interface ChatRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatRound extends SvelteComponent<ChatRoundProps> {}
