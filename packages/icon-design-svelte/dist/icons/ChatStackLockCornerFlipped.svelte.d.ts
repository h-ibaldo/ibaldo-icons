import { SvelteComponent } from 'svelte';

export interface ChatStackLockCornerFlippedProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLockCornerFlipped extends SvelteComponent<ChatStackLockCornerFlippedProps> {}
