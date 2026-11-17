import { SvelteComponent } from 'svelte';

export interface BriefcaseBeltSlotProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class BriefcaseBeltSlot extends SvelteComponent<BriefcaseBeltSlotProps> {}
