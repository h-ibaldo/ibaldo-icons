import { SvelteComponent } from 'svelte';

export interface InfoCirclePointerProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class InfoCirclePointer extends SvelteComponent<InfoCirclePointerProps> {}
