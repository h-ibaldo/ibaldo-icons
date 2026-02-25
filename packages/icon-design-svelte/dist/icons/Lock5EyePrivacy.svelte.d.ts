import { SvelteComponent } from 'svelte';

export interface Lock5EyePrivacyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock5EyePrivacy extends SvelteComponent<Lock5EyePrivacyProps> {}
