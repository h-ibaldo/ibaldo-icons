import { SvelteComponent } from 'svelte';

export interface ChatPlusCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCornerWide extends SvelteComponent<ChatPlusCornerWideProps> {}
