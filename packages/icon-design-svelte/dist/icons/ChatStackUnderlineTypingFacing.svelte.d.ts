import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineTypingFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineTypingFacing extends SvelteComponent<ChatStackUnderlineTypingFacingProps> {}
