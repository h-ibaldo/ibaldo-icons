import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AppsTab3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AppsTab3: ForwardRefExoticComponent<AppsTab3Props & RefAttributes<SVGSVGElement>>;

export default AppsTab3;
export { AppsTab3 };
