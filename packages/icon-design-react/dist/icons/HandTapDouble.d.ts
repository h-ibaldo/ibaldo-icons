import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTapDouble: ForwardRefExoticComponent<HandTapDoubleProps & RefAttributes<SVGSVGElement>>;

export default HandTapDouble;
export { HandTapDouble };
