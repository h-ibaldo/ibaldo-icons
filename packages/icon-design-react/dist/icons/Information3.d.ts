import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Information3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Information3: ForwardRefExoticComponent<Information3Props & RefAttributes<SVGSVGElement>>;

export default Information3;
export { Information3 };
