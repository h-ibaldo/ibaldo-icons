import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Information1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Information1: ForwardRefExoticComponent<Information1Props & RefAttributes<SVGSVGElement>>;

export default Information1;
export { Information1 };
