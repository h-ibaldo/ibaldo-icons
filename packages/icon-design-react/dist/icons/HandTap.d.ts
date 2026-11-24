import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTap: ForwardRefExoticComponent<HandTapProps & RefAttributes<SVGSVGElement>>;

export default HandTap;
export { HandTap };
