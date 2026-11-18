import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayStackHeartProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayStackHeart: ForwardRefExoticComponent<TrayStackHeartProps & RefAttributes<SVGSVGElement>>;

export default TrayStackHeart;
export { TrayStackHeart };
