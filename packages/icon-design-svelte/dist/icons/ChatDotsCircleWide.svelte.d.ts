import { SvelteComponent } from 'svelte';

export interface ChatDotsCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCircleWide extends SvelteComponent<ChatDotsCircleWideProps> {}
