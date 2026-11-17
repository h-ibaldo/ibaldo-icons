import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TouchTapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TouchTap: ForwardRefExoticComponent<TouchTapProps & RefAttributes<SVGSVGElement>>;

export default TouchTap;
export { TouchTap };
