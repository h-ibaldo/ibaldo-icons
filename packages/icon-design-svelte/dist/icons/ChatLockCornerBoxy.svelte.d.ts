import { SvelteComponent } from 'svelte';

export interface ChatLockCornerBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockCornerBoxy extends SvelteComponent<ChatLockCornerBoxyProps> {}
