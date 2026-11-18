import { SvelteComponent } from 'svelte';

export interface ChatLettersBoxyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLettersBoxy extends SvelteComponent<ChatLettersBoxyProps> {}
