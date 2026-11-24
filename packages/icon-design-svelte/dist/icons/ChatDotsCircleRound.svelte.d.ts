import { SvelteComponent } from 'svelte';

export interface ChatDotsCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCircleRound extends SvelteComponent<ChatDotsCircleRoundProps> {}
