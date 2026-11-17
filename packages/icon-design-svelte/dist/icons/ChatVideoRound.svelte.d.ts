import { SvelteComponent } from 'svelte';

export interface ChatVideoRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVideoRound extends SvelteComponent<ChatVideoRoundProps> {}
