import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScrewdriverProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Screwdriver: ForwardRefExoticComponent<ScrewdriverProps & RefAttributes<SVGSVGElement>>;

export default Screwdriver;
export { Screwdriver };
