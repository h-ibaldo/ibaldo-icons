import { SvelteComponent } from 'svelte';

export interface IInformationCircle2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IInformationCircle2 extends SvelteComponent<IInformationCircle2Props> {}
