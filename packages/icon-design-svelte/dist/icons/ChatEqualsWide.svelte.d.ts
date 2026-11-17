import { SvelteComponent } from 'svelte';

export interface ChatEqualsWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEqualsWide extends SvelteComponent<ChatEqualsWideProps> {}
