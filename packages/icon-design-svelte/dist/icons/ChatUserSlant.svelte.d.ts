import { SvelteComponent } from 'svelte';

export interface ChatUserSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUserSlant extends SvelteComponent<ChatUserSlantProps> {}
