import { SvelteComponent } from 'svelte';

export interface ChatLaughWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatLaughWide extends SvelteComponent<ChatLaughWideProps> {}
