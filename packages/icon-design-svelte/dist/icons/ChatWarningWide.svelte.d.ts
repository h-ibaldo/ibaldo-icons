import { SvelteComponent } from 'svelte';

export interface ChatWarningWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatWarningWide extends SvelteComponent<ChatWarningWideProps> {}
