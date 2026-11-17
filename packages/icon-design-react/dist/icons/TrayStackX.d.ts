import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackX: ForwardRefExoticComponent<TrayStackXProps & RefAttributes<SVGSVGElement>>;

export default TrayStackX;
export { TrayStackX };
