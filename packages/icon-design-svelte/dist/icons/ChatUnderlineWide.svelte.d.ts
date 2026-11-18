import { SvelteComponent } from 'svelte';

export interface ChatUnderlineWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatUnderlineWide extends SvelteComponent<ChatUnderlineWideProps> {}
