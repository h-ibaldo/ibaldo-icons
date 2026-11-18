import { SvelteComponent } from 'svelte';

export interface ChatStackDotsVerticalSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatStackDotsVerticalSlant extends SvelteComponent<ChatStackDotsVerticalSlantProps> {}
