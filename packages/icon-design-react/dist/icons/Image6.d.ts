import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Image6Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Image6: ForwardRefExoticComponent<Image6Props & RefAttributes<SVGSVGElement>>;

export default Image6;
export { Image6 };
