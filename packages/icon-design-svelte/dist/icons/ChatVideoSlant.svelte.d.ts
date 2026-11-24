import { SvelteComponent } from 'svelte';

export interface ChatVideoSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVideoSlant extends SvelteComponent<ChatVideoSlantProps> {}
