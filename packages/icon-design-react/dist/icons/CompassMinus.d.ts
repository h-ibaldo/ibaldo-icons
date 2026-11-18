import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassMinus: ForwardRefExoticComponent<CompassMinusProps & RefAttributes<SVGSVGElement>>;

export default CompassMinus;
export { CompassMinus };
