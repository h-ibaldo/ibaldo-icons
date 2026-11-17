import { SvelteComponent } from 'svelte';

export interface ChatForwardCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatForwardCornerWide extends SvelteComponent<ChatForwardCornerWideProps> {}
