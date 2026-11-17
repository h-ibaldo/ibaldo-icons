import { SvelteComponent } from 'svelte';

export interface ChatSearchBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSearchBoxy extends SvelteComponent<ChatSearchBoxyProps> {}
