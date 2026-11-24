import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileOffButtonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileOffButton: ForwardRefExoticComponent<MobileOffButtonProps & RefAttributes<SVGSVGElement>>;

export default MobileOffButton;
export { MobileOffButton };
