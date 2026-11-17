import { SvelteComponent } from 'svelte';

export interface ChatTextProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatText extends SvelteComponent<ChatTextProps> {}
