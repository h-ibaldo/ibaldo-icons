import { SvelteComponent } from 'svelte';

export interface ChatCheckCircleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCircleWide extends SvelteComponent<ChatCheckCircleWideProps> {}
