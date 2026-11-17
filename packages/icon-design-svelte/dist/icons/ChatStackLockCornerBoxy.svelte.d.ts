import { SvelteComponent } from 'svelte';

export interface ChatStackLockCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackLockCornerBoxy extends SvelteComponent<ChatStackLockCornerBoxyProps> {}
