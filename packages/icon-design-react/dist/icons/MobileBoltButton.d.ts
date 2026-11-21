import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobileBoltButtonProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobileBoltButton: ForwardRefExoticComponent<MobileBoltButtonProps & RefAttributes<SVGSVGElement>>;

export default MobileBoltButton;
export { MobileBoltButton };
