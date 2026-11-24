import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandPointerFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandPointerFingers: ForwardRefExoticComponent<HandPointerFingersProps & RefAttributes<SVGSVGElement>>;

export default HandPointerFingers;
export { HandPointerFingers };
