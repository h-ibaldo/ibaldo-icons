import { SvelteComponent } from 'svelte';

export interface ChatEditRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEditRound extends SvelteComponent<ChatEditRoundProps> {}
