import { SvelteComponent } from 'svelte';

export interface CloudLinkVariantProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class CloudLinkVariant extends SvelteComponent<CloudLinkVariantProps> {}
