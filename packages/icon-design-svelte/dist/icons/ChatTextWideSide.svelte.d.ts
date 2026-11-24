import { SvelteComponent } from 'svelte';

export interface ChatTextWideSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextWideSide extends SvelteComponent<ChatTextWideSideProps> {}
