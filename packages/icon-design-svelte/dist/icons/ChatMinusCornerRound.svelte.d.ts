import { SvelteComponent } from 'svelte';

export interface ChatMinusCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCornerRound extends SvelteComponent<ChatMinusCornerRoundProps> {}
