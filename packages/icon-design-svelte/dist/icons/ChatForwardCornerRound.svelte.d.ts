import { SvelteComponent } from 'svelte';

export interface ChatForwardCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardCornerRound extends SvelteComponent<ChatForwardCornerRoundProps> {}
