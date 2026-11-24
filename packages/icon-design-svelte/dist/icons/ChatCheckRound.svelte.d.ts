import { SvelteComponent } from 'svelte';

export interface ChatCheckRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckRound extends SvelteComponent<ChatCheckRoundProps> {}
