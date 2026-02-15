import { SvelteComponent } from 'svelte';

export interface IInformationSquare2Props {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  class?: string;
  [key: string]: any;
}

export default class IInformationSquare2 extends SvelteComponent<IInformationSquare2Props> {}
