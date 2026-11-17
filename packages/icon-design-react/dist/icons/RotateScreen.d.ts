import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RotateScreenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const RotateScreen: ForwardRefExoticComponent<RotateScreenProps & RefAttributes<SVGSVGElement>>;

export default RotateScreen;
export { RotateScreen };
