import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Music92Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music92: ForwardRefExoticComponent<Music92Props & RefAttributes<SVGSVGElement>>;

export default Music92;
export { Music92 };
