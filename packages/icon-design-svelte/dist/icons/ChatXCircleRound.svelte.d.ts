import { SvelteComponent } from 'svelte';

export interface ChatXCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircleRound extends SvelteComponent<ChatXCircleRoundProps> {}
