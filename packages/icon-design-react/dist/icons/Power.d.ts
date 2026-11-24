import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PowerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Power: ForwardRefExoticComponent<PowerProps & RefAttributes<SVGSVGElement>>;

export default Power;
export { Power };
