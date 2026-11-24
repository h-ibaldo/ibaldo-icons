import { SvelteComponent } from 'svelte';

export interface ChatForwardRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardRound extends SvelteComponent<ChatForwardRoundProps> {}
