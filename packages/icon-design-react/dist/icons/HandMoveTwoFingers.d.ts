import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandMoveTwoFingersProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandMoveTwoFingers: ForwardRefExoticComponent<HandMoveTwoFingersProps & RefAttributes<SVGSVGElement>>;

export default HandMoveTwoFingers;
export { HandMoveTwoFingers };
