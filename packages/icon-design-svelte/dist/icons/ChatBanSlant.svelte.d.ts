import { SvelteComponent } from 'svelte';

export interface ChatBanSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBanSlant extends SvelteComponent<ChatBanSlantProps> {}
