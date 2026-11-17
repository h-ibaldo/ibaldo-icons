import { SvelteComponent } from 'svelte';

export interface ChatDotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDot extends SvelteComponent<ChatDotProps> {}
