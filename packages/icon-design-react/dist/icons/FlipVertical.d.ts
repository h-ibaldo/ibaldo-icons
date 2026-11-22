import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FlipVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FlipVertical: ForwardRefExoticComponent<FlipVerticalProps & RefAttributes<SVGSVGElement>>;

export default FlipVertical;
export { FlipVertical };
