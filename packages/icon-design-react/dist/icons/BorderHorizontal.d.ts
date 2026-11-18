import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderHorizontal: ForwardRefExoticComponent<BorderHorizontalProps & RefAttributes<SVGSVGElement>>;

export default BorderHorizontal;
export { BorderHorizontal };
