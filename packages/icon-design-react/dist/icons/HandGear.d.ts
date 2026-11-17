import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandGearProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandGear: ForwardRefExoticComponent<HandGearProps & RefAttributes<SVGSVGElement>>;

export default HandGear;
export { HandGear };
