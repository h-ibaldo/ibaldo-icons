import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HeartAddProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HeartAdd: ForwardRefExoticComponent<HeartAddProps & RefAttributes<SVGSVGElement>>;

export default HeartAdd;
export { HeartAdd };
