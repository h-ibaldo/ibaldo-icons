import { SvelteComponent } from 'svelte';

export interface ChatSunWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatSunWide extends SvelteComponent<ChatSunWideProps> {}
