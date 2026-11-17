import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Image8Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Image8: ForwardRefExoticComponent<Image8Props & RefAttributes<SVGSVGElement>>;

export default Image8;
export { Image8 };
