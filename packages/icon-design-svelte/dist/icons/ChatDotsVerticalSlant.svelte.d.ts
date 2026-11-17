import { SvelteComponent } from 'svelte';

export interface ChatDotsVerticalSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsVerticalSlant extends SvelteComponent<ChatDotsVerticalSlantProps> {}
