import { SvelteComponent } from 'svelte';

export interface ChatStackDotsVerticalBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsVerticalBoxy extends SvelteComponent<ChatStackDotsVerticalBoxyProps> {}
