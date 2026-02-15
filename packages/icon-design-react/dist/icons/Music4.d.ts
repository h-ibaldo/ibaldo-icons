import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Music4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music4: ForwardRefExoticComponent<Music4Props & RefAttributes<SVGSVGElement>>;

export default Music4;
export { Music4 };
