import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandGear1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandGear1: ForwardRefExoticComponent<HandGear1Props & RefAttributes<SVGSVGElement>>;

export default HandGear1;
export { HandGear1 };
