import { SvelteComponent } from 'svelte';

export interface ChatSearchRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSearchRound extends SvelteComponent<ChatSearchRoundProps> {}
