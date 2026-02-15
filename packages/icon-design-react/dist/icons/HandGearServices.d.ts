import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandGearServicesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandGearServices: ForwardRefExoticComponent<HandGearServicesProps & RefAttributes<SVGSVGElement>>;

export default HandGearServices;
export { HandGearServices };
