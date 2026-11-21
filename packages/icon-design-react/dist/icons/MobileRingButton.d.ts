import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileRingButtonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileRingButton: ForwardRefExoticComponent<MobileRingButtonProps & RefAttributes<SVGSVGElement>>;

export default MobileRingButton;
export { MobileRingButton };
