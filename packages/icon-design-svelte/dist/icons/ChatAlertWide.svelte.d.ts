import { SvelteComponent } from 'svelte';

export interface ChatAlertWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatAlertWide extends SvelteComponent<ChatAlertWideProps> {}
