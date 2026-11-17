import { SvelteComponent } from 'svelte';

export interface ChatBanBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBanBoxy extends SvelteComponent<ChatBanBoxyProps> {}
