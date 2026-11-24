import { SvelteComponent } from 'svelte';

export interface ChatWarningRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWarningRound extends SvelteComponent<ChatWarningRoundProps> {}
