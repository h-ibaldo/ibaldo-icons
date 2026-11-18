import { SvelteComponent } from 'svelte';

export interface ChatForwardWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardWide extends SvelteComponent<ChatForwardWideProps> {}
