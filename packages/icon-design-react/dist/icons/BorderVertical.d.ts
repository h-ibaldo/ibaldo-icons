import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BorderVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BorderVertical: ForwardRefExoticComponent<BorderVerticalProps & RefAttributes<SVGSVGElement>>;

export default BorderVertical;
export { BorderVertical };
