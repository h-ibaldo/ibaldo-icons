import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Image5Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Image5: ForwardRefExoticComponent<Image5Props & RefAttributes<SVGSVGElement>>;

export default Image5;
export { Image5 };
