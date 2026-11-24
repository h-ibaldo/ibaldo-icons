import { SvelteComponent } from 'svelte';

export interface ChatSearchCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSearchCornerWide extends SvelteComponent<ChatSearchCornerWideProps> {}
