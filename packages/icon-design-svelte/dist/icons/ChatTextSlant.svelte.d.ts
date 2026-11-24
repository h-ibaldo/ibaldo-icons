import { SvelteComponent } from 'svelte';

export interface ChatTextSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextSlant extends SvelteComponent<ChatTextSlantProps> {}
