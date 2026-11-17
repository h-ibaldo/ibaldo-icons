import { SvelteComponent } from 'svelte';

export interface ChatStarRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStarRound extends SvelteComponent<ChatStarRoundProps> {}
