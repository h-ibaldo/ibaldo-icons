import { SvelteComponent } from 'svelte';

export interface ChatBanRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBanRound extends SvelteComponent<ChatBanRoundProps> {}
