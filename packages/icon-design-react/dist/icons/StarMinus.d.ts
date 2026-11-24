import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StarMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StarMinus: ForwardRefExoticComponent<StarMinusProps & RefAttributes<SVGSVGElement>>;

export default StarMinus;
export { StarMinus };
