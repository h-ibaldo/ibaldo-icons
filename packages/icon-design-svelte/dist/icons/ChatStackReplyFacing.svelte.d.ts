import { SvelteComponent } from 'svelte';

export interface ChatStackReplyFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyFacing extends SvelteComponent<ChatStackReplyFacingProps> {}
