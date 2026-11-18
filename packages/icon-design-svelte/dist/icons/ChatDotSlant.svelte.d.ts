import { SvelteComponent } from 'svelte';

export interface ChatDotSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotSlant extends SvelteComponent<ChatDotSlantProps> {}
