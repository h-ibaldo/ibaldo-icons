import { SvelteComponent } from 'svelte';

export interface ChatStackLockCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLockCorner extends SvelteComponent<ChatStackLockCornerProps> {}
