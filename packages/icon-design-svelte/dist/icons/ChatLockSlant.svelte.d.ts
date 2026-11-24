import { SvelteComponent } from 'svelte';

export interface ChatLockSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLockSlant extends SvelteComponent<ChatLockSlantProps> {}
