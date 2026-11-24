import { SvelteComponent } from 'svelte';

export interface ChatLettersWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLettersWide extends SvelteComponent<ChatLettersWideProps> {}
