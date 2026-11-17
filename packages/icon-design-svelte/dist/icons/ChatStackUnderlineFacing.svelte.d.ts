import { SvelteComponent } from 'svelte';

export interface ChatStackUnderlineFacingProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackUnderlineFacing extends SvelteComponent<ChatStackUnderlineFacingProps> {}
