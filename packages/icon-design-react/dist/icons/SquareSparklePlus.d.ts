import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SquareSparklePlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SquareSparklePlus: ForwardRefExoticComponent<SquareSparklePlusProps & RefAttributes<SVGSVGElement>>;

export default SquareSparklePlus;
export { SquareSparklePlus };
