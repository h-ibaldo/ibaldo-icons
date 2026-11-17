import { SvelteComponent } from 'svelte';

export interface ChatEditWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEditWide extends SvelteComponent<ChatEditWideProps> {}
