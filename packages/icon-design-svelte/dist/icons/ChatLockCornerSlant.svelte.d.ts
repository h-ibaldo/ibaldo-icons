import { SvelteComponent } from 'svelte';

export interface ChatLockCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockCornerSlant extends SvelteComponent<ChatLockCornerSlantProps> {}
