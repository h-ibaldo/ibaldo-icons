import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobilePopUp2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobilePopUp2: ForwardRefExoticComponent<MobilePopUp2Props & RefAttributes<SVGSVGElement>>;

export default MobilePopUp2;
export { MobilePopUp2 };
