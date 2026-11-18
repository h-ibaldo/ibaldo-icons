import { SvelteComponent } from 'svelte';

export interface ChatInfoWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatInfoWide extends SvelteComponent<ChatInfoWideProps> {}
