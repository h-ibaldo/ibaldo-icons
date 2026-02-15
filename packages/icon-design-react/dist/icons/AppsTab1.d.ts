import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppsTab1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppsTab1: ForwardRefExoticComponent<AppsTab1Props & RefAttributes<SVGSVGElement>>;

export default AppsTab1;
export { AppsTab1 };
