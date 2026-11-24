import { SvelteComponent } from 'svelte';

export interface ChatOneCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatOneCircleWide extends SvelteComponent<ChatOneCircleWideProps> {}
