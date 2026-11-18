import { SvelteComponent } from 'svelte';

export interface ChatLockCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockCornerBroken extends SvelteComponent<ChatLockCornerBrokenProps> {}
