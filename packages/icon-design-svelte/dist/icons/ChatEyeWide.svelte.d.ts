import { SvelteComponent } from 'svelte';

export interface ChatEyeWideProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class ChatEyeWide extends SvelteComponent<ChatEyeWideProps> {}
