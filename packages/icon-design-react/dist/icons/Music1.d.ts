import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Music1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music1: ForwardRefExoticComponent<Music1Props & RefAttributes<SVGSVGElement>>;

export default Music1;
export { Music1 };
