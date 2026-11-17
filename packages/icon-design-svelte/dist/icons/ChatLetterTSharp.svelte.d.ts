import { SvelteComponent } from 'svelte';

export interface ChatLetterTSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLetterTSharp extends SvelteComponent<ChatLetterTSharpProps> {}
