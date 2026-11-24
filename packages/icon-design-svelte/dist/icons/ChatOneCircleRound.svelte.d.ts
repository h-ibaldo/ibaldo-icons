import { SvelteComponent } from 'svelte';

export interface ChatOneCircleRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOneCircleRound extends SvelteComponent<ChatOneCircleRoundProps> {}
