import { SvelteComponent } from 'svelte';

export interface ChatTextOffBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextOffBoxy extends SvelteComponent<ChatTextOffBoxyProps> {}
