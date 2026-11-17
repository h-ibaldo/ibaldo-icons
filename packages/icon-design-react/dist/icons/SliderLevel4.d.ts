import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SliderLevel4Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SliderLevel4: ForwardRefExoticComponent<SliderLevel4Props & RefAttributes<SVGSVGElement>>;

export default SliderLevel4;
export { SliderLevel4 };
