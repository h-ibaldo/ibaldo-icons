import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchTapDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchTapDouble: ForwardRefExoticComponent<TouchTapDoubleProps & RefAttributes<SVGSVGElement>>;

export default TouchTapDouble;
export { TouchTapDouble };
