import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleRound extends SvelteComponent<ChatCheckDoubleRoundProps> {}
