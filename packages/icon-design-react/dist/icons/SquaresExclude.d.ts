import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquaresExcludeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquaresExclude: ForwardRefExoticComponent<SquaresExcludeProps & RefAttributes<SVGSVGElement>>;

export default SquaresExclude;
export { SquaresExclude };
