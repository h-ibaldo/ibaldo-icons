import { SvelteComponent } from 'svelte';

export interface ChatStackLockCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLockCornerSlant extends SvelteComponent<ChatStackLockCornerSlantProps> {}
