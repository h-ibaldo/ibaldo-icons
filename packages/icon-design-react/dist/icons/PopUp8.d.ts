import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PopUp8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PopUp8: ForwardRefExoticComponent<PopUp8Props & RefAttributes<SVGSVGElement>>;

export default PopUp8;
export { PopUp8 };
