import { SvelteComponent } from 'svelte';

export interface ChatInfoSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatInfoSlant extends SvelteComponent<ChatInfoSlantProps> {}
