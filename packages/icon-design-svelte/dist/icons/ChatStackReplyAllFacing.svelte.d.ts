import { SvelteComponent } from 'svelte';

export interface ChatStackReplyAllFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackReplyAllFacing extends SvelteComponent<ChatStackReplyAllFacingProps> {}
