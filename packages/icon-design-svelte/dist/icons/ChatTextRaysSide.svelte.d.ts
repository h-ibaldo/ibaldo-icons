import { SvelteComponent } from 'svelte';

export interface ChatTextRaysSideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatTextRaysSide extends SvelteComponent<ChatTextRaysSideProps> {}
