import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Music10Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music10: ForwardRefExoticComponent<Music10Props & RefAttributes<SVGSVGElement>>;

export default Music10;
export { Music10 };
