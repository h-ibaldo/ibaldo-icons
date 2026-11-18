import { SvelteComponent } from 'svelte';

export interface ChatPlusCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatPlusCircleWide extends SvelteComponent<ChatPlusCircleWideProps> {}
