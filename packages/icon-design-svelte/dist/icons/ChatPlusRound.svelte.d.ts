import { SvelteComponent } from 'svelte';

export interface ChatPlusRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusRound extends SvelteComponent<ChatPlusRoundProps> {}
