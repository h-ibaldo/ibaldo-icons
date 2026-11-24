import { SvelteComponent } from 'svelte';

export interface ChatTextOffSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextOffSlant extends SvelteComponent<ChatTextOffSlantProps> {}
