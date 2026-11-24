import { SvelteComponent } from 'svelte';

export interface ChatLettersSharpProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLettersSharp extends SvelteComponent<ChatLettersSharpProps> {}
