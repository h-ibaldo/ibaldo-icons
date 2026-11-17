import { SvelteComponent } from 'svelte';

export interface TrashForbidden2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class TrashForbidden2 extends SvelteComponent<TrashForbidden2Props> {}
