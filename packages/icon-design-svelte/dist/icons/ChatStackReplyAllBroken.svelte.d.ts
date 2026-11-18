import { SvelteComponent } from 'svelte';

export interface ChatStackReplyAllBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyAllBroken extends SvelteComponent<ChatStackReplyAllBrokenProps> {}
