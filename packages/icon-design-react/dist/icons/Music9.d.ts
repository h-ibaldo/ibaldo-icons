import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Music9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music9: ForwardRefExoticComponent<Music9Props & RefAttributes<SVGSVGElement>>;

export default Music9;
export { Music9 };
