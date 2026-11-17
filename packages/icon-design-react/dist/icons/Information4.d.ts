import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Information4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Information4: ForwardRefExoticComponent<Information4Props & RefAttributes<SVGSVGElement>>;

export default Information4;
export { Information4 };
