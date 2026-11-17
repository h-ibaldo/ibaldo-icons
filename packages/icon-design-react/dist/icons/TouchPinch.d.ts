import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchPinchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchPinch: ForwardRefExoticComponent<TouchPinchProps & RefAttributes<SVGSVGElement>>;

export default TouchPinch;
export { TouchPinch };
