import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareEditPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareEditPlus: ForwardRefExoticComponent<SquareEditPlusProps & RefAttributes<SVGSVGElement>>;

export default SquareEditPlus;
export { SquareEditPlus };
