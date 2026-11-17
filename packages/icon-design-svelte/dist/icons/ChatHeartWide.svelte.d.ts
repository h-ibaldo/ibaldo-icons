import { SvelteComponent } from 'svelte';

export interface ChatHeartWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatHeartWide extends SvelteComponent<ChatHeartWideProps> {}
