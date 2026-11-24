import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PushpinOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PushpinOff: ForwardRefExoticComponent<PushpinOffProps & RefAttributes<SVGSVGElement>>;

export default PushpinOff;
export { PushpinOff };
