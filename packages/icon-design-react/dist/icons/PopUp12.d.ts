import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp12: ForwardRefExoticComponent<PopUp12Props & RefAttributes<SVGSVGElement>>;

export default PopUp12;
export { PopUp12 };
