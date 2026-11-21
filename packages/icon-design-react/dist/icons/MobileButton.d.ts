import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileButtonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileButton: ForwardRefExoticComponent<MobileButtonProps & RefAttributes<SVGSVGElement>>;

export default MobileButton;
export { MobileButton };
