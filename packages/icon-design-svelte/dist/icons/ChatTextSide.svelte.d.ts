import { SvelteComponent } from 'svelte';

export interface ChatTextSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextSide extends SvelteComponent<ChatTextSideProps> {}
