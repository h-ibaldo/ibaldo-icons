import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Music11Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music11: ForwardRefExoticComponent<Music11Props & RefAttributes<SVGSVGElement>>;

export default Music11;
export { Music11 };
