import { SvelteComponent } from 'svelte';

export interface ChatStackTextBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackTextBoxy extends SvelteComponent<ChatStackTextBoxyProps> {}
