import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Music5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Music5: ForwardRefExoticComponent<Music5Props & RefAttributes<SVGSVGElement>>;

export default Music5;
export { Music5 };
