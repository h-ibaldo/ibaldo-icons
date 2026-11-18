import { SvelteComponent } from 'svelte';

export interface ChatInfoRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatInfoRound extends SvelteComponent<ChatInfoRoundProps> {}
