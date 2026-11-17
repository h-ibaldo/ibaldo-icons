import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab4XRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab4XRight: ForwardRefExoticComponent<Tab4XRightProps & RefAttributes<SVGSVGElement>>;

export default Tab4XRight;
export { Tab4XRight };
