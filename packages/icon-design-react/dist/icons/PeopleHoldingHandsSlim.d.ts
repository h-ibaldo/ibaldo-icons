import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PeopleHoldingHandsSlimProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PeopleHoldingHandsSlim: ForwardRefExoticComponent<PeopleHoldingHandsSlimProps & RefAttributes<SVGSVGElement>>;

export default PeopleHoldingHandsSlim;
export { PeopleHoldingHandsSlim };
