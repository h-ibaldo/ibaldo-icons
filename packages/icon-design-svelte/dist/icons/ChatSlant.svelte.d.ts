import { SvelteComponent } from 'svelte';

export interface ChatSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSlant extends SvelteComponent<ChatSlantProps> {}
