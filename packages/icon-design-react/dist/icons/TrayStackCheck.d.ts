import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackCheck: ForwardRefExoticComponent<TrayStackCheckProps & RefAttributes<SVGSVGElement>>;

export default TrayStackCheck;
export { TrayStackCheck };
