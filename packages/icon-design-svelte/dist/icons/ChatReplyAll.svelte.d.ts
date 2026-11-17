import { SvelteComponent } from 'svelte';

export interface ChatReplyAllProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatReplyAll extends SvelteComponent<ChatReplyAllProps> {}
