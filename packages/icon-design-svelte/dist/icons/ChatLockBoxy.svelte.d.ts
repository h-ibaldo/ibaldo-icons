import { SvelteComponent } from 'svelte';

export interface ChatLockBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockBoxy extends SvelteComponent<ChatLockBoxyProps> {}
