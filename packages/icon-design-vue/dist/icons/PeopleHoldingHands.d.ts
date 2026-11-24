import type { DefineComponent } from 'vue';

export interface PeopleHoldingHandsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PeopleHoldingHands: DefineComponent<PeopleHoldingHandsProps>;

export default PeopleHoldingHands;
export { PeopleHoldingHands };
