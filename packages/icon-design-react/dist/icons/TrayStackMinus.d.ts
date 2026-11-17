import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackMinus: ForwardRefExoticComponent<TrayStackMinusProps & RefAttributes<SVGSVGElement>>;

export default TrayStackMinus;
export { TrayStackMinus };
