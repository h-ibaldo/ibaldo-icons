import { SvelteComponent } from 'svelte';

export interface ChatStackReplyBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyBroken extends SvelteComponent<ChatStackReplyBrokenProps> {}
