import { SvelteComponent } from 'svelte';

export interface ChatStackReplyAllProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyAll extends SvelteComponent<ChatStackReplyAllProps> {}
