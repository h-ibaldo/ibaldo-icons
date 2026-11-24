import { SvelteComponent } from 'svelte';

export interface ChatImageCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatImageCornerWide extends SvelteComponent<ChatImageCornerWideProps> {}
