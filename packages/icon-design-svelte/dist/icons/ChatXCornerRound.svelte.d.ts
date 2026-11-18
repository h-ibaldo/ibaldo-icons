import { SvelteComponent } from 'svelte';

export interface ChatXCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCornerRound extends SvelteComponent<ChatXCornerRoundProps> {}
