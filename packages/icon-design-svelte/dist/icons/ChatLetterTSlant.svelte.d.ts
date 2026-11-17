import { SvelteComponent } from 'svelte';

export interface ChatLetterTSlantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLetterTSlant extends SvelteComponent<ChatLetterTSlantProps> {}
