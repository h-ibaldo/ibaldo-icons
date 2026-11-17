import { SvelteComponent } from 'svelte';

export interface ChatXCornerSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCornerSlant extends SvelteComponent<ChatXCornerSlantProps> {}
