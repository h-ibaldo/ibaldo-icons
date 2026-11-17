import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Image3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Image3: ForwardRefExoticComponent<Image3Props & RefAttributes<SVGSVGElement>>;

export default Image3;
export { Image3 };
