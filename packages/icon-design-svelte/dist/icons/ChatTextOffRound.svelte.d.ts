import { SvelteComponent } from 'svelte';

export interface ChatTextOffRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextOffRound extends SvelteComponent<ChatTextOffRoundProps> {}
