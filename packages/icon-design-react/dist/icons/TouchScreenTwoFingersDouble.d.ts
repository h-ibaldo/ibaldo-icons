import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchScreenTwoFingersDoubleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchScreenTwoFingersDouble: ForwardRefExoticComponent<TouchScreenTwoFingersDoubleProps & RefAttributes<SVGSVGElement>>;

export default TouchScreenTwoFingersDouble;
export { TouchScreenTwoFingersDouble };
