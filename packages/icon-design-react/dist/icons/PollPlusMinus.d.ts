import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PollPlusMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PollPlusMinus: ForwardRefExoticComponent<PollPlusMinusProps & RefAttributes<SVGSVGElement>>;

export default PollPlusMinus;
export { PollPlusMinus };
