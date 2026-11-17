import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Tab3ArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tab3ArrowRight: ForwardRefExoticComponent<Tab3ArrowRightProps & RefAttributes<SVGSVGElement>>;

export default Tab3ArrowRight;
export { Tab3ArrowRight };
