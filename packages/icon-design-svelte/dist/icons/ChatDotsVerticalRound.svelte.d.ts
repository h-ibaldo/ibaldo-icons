import { SvelteComponent } from 'svelte';

export interface ChatDotsVerticalRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsVerticalRound extends SvelteComponent<ChatDotsVerticalRoundProps> {}
