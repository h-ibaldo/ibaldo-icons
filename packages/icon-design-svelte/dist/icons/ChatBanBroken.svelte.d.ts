import { SvelteComponent } from 'svelte';

export interface ChatBanBrokenProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBanBroken extends SvelteComponent<ChatBanBrokenProps> {}
