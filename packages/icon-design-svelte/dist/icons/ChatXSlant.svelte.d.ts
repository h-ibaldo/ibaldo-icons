import { SvelteComponent } from 'svelte';

export interface ChatXSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXSlant extends SvelteComponent<ChatXSlantProps> {}
