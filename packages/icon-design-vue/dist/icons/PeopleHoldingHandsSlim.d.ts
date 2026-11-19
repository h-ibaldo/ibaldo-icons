import type { DefineComponent } from 'vue';

export interface PeopleHoldingHandsSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PeopleHoldingHandsSlim: DefineComponent<PeopleHoldingHandsSlimProps>;

export default PeopleHoldingHandsSlim;
export { PeopleHoldingHandsSlim };
