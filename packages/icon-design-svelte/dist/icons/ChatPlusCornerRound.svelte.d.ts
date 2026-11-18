import { SvelteComponent } from 'svelte';

export interface ChatPlusCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCornerRound extends SvelteComponent<ChatPlusCornerRoundProps> {}
