import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TabletProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Tablet: ForwardRefExoticComponent<TabletProps & RefAttributes<SVGSVGElement>>;

export default Tablet;
export { Tablet };
