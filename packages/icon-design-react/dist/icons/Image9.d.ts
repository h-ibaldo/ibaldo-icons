import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Image9Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Image9: ForwardRefExoticComponent<Image9Props & RefAttributes<SVGSVGElement>>;

export default Image9;
export { Image9 };
