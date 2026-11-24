import { SvelteComponent } from 'svelte';

export interface ChatBanCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatBanCornerWide extends SvelteComponent<ChatBanCornerWideProps> {}
