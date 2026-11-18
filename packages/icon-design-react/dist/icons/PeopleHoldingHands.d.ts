import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PeopleHoldingHandsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PeopleHoldingHands: ForwardRefExoticComponent<PeopleHoldingHandsProps & RefAttributes<SVGSVGElement>>;

export default PeopleHoldingHands;
export { PeopleHoldingHands };
