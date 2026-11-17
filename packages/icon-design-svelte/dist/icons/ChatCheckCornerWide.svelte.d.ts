import { SvelteComponent } from 'svelte';

export interface ChatCheckCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatCheckCornerWide extends SvelteComponent<ChatCheckCornerWideProps> {}
