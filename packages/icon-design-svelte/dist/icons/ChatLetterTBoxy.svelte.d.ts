import { SvelteComponent } from 'svelte';

export interface ChatLetterTBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLetterTBoxy extends SvelteComponent<ChatLetterTBoxyProps> {}
