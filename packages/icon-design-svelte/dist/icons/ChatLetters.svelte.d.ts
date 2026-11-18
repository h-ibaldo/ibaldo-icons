import { SvelteComponent } from 'svelte';

export interface ChatLettersProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLetters extends SvelteComponent<ChatLettersProps> {}
