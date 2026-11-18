import { SvelteComponent } from 'svelte';

export interface ChatClockWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatClockWide extends SvelteComponent<ChatClockWideProps> {}
