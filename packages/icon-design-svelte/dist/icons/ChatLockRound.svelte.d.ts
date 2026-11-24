import { SvelteComponent } from 'svelte';

export interface ChatLockRoundProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockRound extends SvelteComponent<ChatLockRoundProps> {}
