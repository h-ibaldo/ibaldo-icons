import { SvelteComponent } from 'svelte';

export interface ChatStackLockCornerBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLockCornerBroken extends SvelteComponent<ChatStackLockCornerBrokenProps> {}
