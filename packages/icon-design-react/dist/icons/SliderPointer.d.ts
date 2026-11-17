import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SliderPointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SliderPointer: ForwardRefExoticComponent<SliderPointerProps & RefAttributes<SVGSVGElement>>;

export default SliderPointer;
export { SliderPointer };
