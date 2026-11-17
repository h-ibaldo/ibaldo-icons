import { SvelteComponent } from 'svelte';

export interface ChatLetterTProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLetterT extends SvelteComponent<ChatLetterTProps> {}
