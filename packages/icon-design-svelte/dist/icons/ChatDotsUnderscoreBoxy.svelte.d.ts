import { SvelteComponent } from 'svelte';

export interface ChatDotsUnderscoreBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsUnderscoreBoxy extends SvelteComponent<ChatDotsUnderscoreBoxyProps> {}
