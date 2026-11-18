import { SvelteComponent } from 'svelte';

export interface ChatForwardSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardSlant extends SvelteComponent<ChatForwardSlantProps> {}
