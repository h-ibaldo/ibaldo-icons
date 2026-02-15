import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp6: ForwardRefExoticComponent<PopUp6Props & RefAttributes<SVGSVGElement>>;

export default PopUp6;
export { PopUp6 };
