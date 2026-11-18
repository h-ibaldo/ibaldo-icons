import { SvelteComponent } from 'svelte';

export interface ChatUnderlineSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUnderlineSlant extends SvelteComponent<ChatUnderlineSlantProps> {}
