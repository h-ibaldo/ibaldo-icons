import { SvelteComponent } from 'svelte';

export interface ChatDotsCursorWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatDotsCursorWide extends SvelteComponent<ChatDotsCursorWideProps> {}
