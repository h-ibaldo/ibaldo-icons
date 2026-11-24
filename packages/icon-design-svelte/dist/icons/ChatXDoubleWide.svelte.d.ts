import { SvelteComponent } from 'svelte';

export interface ChatXDoubleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatXDoubleWide extends SvelteComponent<ChatXDoubleWideProps> {}
