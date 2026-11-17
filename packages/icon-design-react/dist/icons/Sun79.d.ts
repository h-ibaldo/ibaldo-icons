import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun79Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun79: ForwardRefExoticComponent<Sun79Props & RefAttributes<SVGSVGElement>>;

export default Sun79;
export { Sun79 };
