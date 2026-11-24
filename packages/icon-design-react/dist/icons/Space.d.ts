import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpaceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Space: ForwardRefExoticComponent<SpaceProps & RefAttributes<SVGSVGElement>>;

export default Space;
export { Space };
