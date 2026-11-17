import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareStackPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareStackPlus: ForwardRefExoticComponent<SquareStackPlusProps & RefAttributes<SVGSVGElement>>;

export default SquareStackPlus;
export { SquareStackPlus };
