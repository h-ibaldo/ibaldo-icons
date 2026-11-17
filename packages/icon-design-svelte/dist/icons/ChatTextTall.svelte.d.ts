import { SvelteComponent } from 'svelte';

export interface ChatTextTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextTall extends SvelteComponent<ChatTextTallProps> {}
