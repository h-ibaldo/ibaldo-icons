import { SvelteComponent } from 'svelte';

export interface ChatVideoWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatVideoWide extends SvelteComponent<ChatVideoWideProps> {}
