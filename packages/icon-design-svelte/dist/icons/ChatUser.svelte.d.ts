import { SvelteComponent } from 'svelte';

export interface ChatUserProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUser extends SvelteComponent<ChatUserProps> {}
