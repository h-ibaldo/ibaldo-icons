import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleCornerWide extends SvelteComponent<ChatCheckDoubleCornerWideProps> {}
