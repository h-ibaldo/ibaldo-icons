import { SvelteComponent } from 'svelte';

export interface ChatMinusCornerWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatMinusCornerWide extends SvelteComponent<ChatMinusCornerWideProps> {}
