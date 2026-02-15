import { SvelteComponent } from 'svelte';

export interface IInformation5Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IInformation5 extends SvelteComponent<IInformation5Props> {}
