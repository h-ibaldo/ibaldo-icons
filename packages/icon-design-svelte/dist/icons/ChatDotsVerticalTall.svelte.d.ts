import { SvelteComponent } from 'svelte';

export interface ChatDotsVerticalTallProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsVerticalTall extends SvelteComponent<ChatDotsVerticalTallProps> {}
