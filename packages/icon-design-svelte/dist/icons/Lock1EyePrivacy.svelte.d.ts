import { SvelteComponent } from 'svelte';

export interface Lock1EyePrivacyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class Lock1EyePrivacy extends SvelteComponent<Lock1EyePrivacyProps> {}
