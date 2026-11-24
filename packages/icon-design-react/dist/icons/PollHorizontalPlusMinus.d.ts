import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollHorizontalPlusMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollHorizontalPlusMinus: ForwardRefExoticComponent<PollHorizontalPlusMinusProps & RefAttributes<SVGSVGElement>>;

export default PollHorizontalPlusMinus;
export { PollHorizontalPlusMinus };
