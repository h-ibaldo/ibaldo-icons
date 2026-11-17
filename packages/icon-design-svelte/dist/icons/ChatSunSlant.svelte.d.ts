import { SvelteComponent } from 'svelte';

export interface ChatSunSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSunSlant extends SvelteComponent<ChatSunSlantProps> {}
