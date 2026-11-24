import { SvelteComponent } from 'svelte';

export interface ChatUserRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUserRound extends SvelteComponent<ChatUserRoundProps> {}
