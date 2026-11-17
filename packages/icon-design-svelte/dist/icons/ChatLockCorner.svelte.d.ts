import { SvelteComponent } from 'svelte';

export interface ChatLockCornerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockCorner extends SvelteComponent<ChatLockCornerProps> {}
