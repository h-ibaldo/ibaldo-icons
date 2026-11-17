import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowHeart: ForwardRefExoticComponent<WindowHeartProps & RefAttributes<SVGSVGElement>>;

export default WindowHeart;
export { WindowHeart };
