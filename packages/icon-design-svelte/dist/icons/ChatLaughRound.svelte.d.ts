import { SvelteComponent } from 'svelte';

export interface ChatLaughRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLaughRound extends SvelteComponent<ChatLaughRoundProps> {}
