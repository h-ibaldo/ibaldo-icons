import { SvelteComponent } from 'svelte';

export interface ChatXRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXRound extends SvelteComponent<ChatXRoundProps> {}
