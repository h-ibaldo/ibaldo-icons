import { SvelteComponent } from 'svelte';

export interface ChatStackReplyAllCornerFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyAllCornerFlipped extends SvelteComponent<ChatStackReplyAllCornerFlippedProps> {}
