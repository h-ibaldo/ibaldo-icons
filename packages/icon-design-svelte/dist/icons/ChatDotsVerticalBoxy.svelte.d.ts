import { SvelteComponent } from 'svelte';

export interface ChatDotsVerticalBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsVerticalBoxy extends SvelteComponent<ChatDotsVerticalBoxyProps> {}
