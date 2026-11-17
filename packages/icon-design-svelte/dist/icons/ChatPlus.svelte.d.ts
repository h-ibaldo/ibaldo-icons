import { SvelteComponent } from 'svelte';

export interface ChatPlusProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlus extends SvelteComponent<ChatPlusProps> {}
