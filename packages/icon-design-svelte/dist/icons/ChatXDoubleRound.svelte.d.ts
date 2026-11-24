import { SvelteComponent } from 'svelte';

export interface ChatXDoubleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXDoubleRound extends SvelteComponent<ChatXDoubleRoundProps> {}
