import { SvelteComponent } from 'svelte';

export interface ChatXCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCornerWide extends SvelteComponent<ChatXCornerWideProps> {}
