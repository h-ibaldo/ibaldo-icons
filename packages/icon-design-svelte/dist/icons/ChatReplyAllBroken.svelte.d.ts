import { SvelteComponent } from 'svelte';

export interface ChatReplyAllBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyAllBroken extends SvelteComponent<ChatReplyAllBrokenProps> {}
