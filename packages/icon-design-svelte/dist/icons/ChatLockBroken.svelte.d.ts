import { SvelteComponent } from 'svelte';

export interface ChatLockBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockBroken extends SvelteComponent<ChatLockBrokenProps> {}
