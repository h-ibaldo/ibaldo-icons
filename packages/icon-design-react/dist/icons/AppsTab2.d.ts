import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppsTab2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppsTab2: ForwardRefExoticComponent<AppsTab2Props & RefAttributes<SVGSVGElement>>;

export default AppsTab2;
export { AppsTab2 };
