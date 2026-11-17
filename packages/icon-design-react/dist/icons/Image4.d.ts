import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Image4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Image4: ForwardRefExoticComponent<Image4Props & RefAttributes<SVGSVGElement>>;

export default Image4;
export { Image4 };
