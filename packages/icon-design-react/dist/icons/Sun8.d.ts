import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Sun8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Sun8: ForwardRefExoticComponent<Sun8Props & RefAttributes<SVGSVGElement>>;

export default Sun8;
export { Sun8 };
