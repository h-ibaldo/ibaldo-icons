import { SvelteComponent } from 'svelte';

export interface ChatCheckWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckWide extends SvelteComponent<ChatCheckWideProps> {}
