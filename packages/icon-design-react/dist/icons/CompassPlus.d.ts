import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CompassPlusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CompassPlus: ForwardRefExoticComponent<CompassPlusProps & RefAttributes<SVGSVGElement>>;

export default CompassPlus;
export { CompassPlus };
