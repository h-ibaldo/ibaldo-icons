import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleHashtagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleHashtag: ForwardRefExoticComponent<CircleHashtagProps & RefAttributes<SVGSVGElement>>;

export default CircleHashtag;
export { CircleHashtag };
