import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp3: ForwardRefExoticComponent<PopUp3Props & RefAttributes<SVGSVGElement>>;

export default PopUp3;
export { PopUp3 };
