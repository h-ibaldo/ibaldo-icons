import { SvelteComponent } from 'svelte';

export interface ChatLetterTWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLetterTWide extends SvelteComponent<ChatLetterTWideProps> {}
