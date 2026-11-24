import { SvelteComponent } from 'svelte';

export interface ChatPlusSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusSlant extends SvelteComponent<ChatPlusSlantProps> {}
