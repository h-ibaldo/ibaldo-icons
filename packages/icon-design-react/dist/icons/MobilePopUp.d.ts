import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MobilePopUpProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MobilePopUp: ForwardRefExoticComponent<MobilePopUpProps & RefAttributes<SVGSVGElement>>;

export default MobilePopUp;
export { MobilePopUp };
