import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowPlusCenterProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowPlusCenter: ForwardRefExoticComponent<WindowPlusCenterProps & RefAttributes<SVGSVGElement>>;

export default WindowPlusCenter;
export { WindowPlusCenter };
