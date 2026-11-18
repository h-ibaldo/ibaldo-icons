import { SvelteComponent } from 'svelte';

export interface ChatUserBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUserBoxy extends SvelteComponent<ChatUserBoxyProps> {}
