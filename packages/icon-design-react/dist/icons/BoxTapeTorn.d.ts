import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BoxTapeTornProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BoxTapeTorn: ForwardRefExoticComponent<BoxTapeTornProps & RefAttributes<SVGSVGElement>>;

export default BoxTapeTorn;
export { BoxTapeTorn };
