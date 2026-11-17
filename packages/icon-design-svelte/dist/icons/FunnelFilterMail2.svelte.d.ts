import { SvelteComponent } from 'svelte';

export interface FunnelFilterMail2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class FunnelFilterMail2 extends SvelteComponent<FunnelFilterMail2Props> {}
