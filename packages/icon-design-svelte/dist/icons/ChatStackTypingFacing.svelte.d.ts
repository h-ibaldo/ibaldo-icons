import { SvelteComponent } from 'svelte';

export interface ChatStackTypingFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTypingFacing extends SvelteComponent<ChatStackTypingFacingProps> {}
