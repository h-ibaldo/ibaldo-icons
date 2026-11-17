import { SvelteComponent } from 'svelte';

export interface ChatXTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXTall extends SvelteComponent<ChatXTallProps> {}
