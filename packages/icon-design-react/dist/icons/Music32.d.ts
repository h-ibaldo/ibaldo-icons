import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Music32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music32: ForwardRefExoticComponent<Music32Props & RefAttributes<SVGSVGElement>>;

export default Music32;
export { Music32 };
