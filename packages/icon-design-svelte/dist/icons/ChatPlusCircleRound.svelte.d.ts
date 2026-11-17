import { SvelteComponent } from 'svelte';

export interface ChatPlusCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCircleRound extends SvelteComponent<ChatPlusCircleRoundProps> {}
