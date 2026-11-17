import { SvelteComponent } from 'svelte';

export interface ChatTextLargeSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextLargeSide extends SvelteComponent<ChatTextLargeSideProps> {}
