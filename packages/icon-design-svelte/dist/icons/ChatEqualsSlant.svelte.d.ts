import { SvelteComponent } from 'svelte';

export interface ChatEqualsSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEqualsSlant extends SvelteComponent<ChatEqualsSlantProps> {}
