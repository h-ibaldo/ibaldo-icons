import { SvelteComponent } from 'svelte';

export interface ChatCheckDoubleWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckDoubleWide extends SvelteComponent<ChatCheckDoubleWideProps> {}
