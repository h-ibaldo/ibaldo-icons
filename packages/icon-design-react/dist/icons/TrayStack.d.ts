import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStack: ForwardRefExoticComponent<TrayStackProps & RefAttributes<SVGSVGElement>>;

export default TrayStack;
export { TrayStack };
