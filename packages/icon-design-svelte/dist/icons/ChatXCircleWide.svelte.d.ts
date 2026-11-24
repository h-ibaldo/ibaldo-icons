import { SvelteComponent } from 'svelte';

export interface ChatXCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXCircleWide extends SvelteComponent<ChatXCircleWideProps> {}
