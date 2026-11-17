import { SvelteComponent } from 'svelte';

export interface LockEyePrivacyProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class LockEyePrivacy extends SvelteComponent<LockEyePrivacyProps> {}
