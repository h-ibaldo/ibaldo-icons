import { SvelteComponent } from 'svelte';

export interface ChatLockCornerRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockCornerRound extends SvelteComponent<ChatLockCornerRoundProps> {}
