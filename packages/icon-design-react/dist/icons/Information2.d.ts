import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Information2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Information2: ForwardRefExoticComponent<Information2Props & RefAttributes<SVGSVGElement>>;

export default Information2;
export { Information2 };
