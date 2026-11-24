import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface DotsVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const DotsVertical: ForwardRefExoticComponent<DotsVerticalProps & RefAttributes<SVGSVGElement>>;

export default DotsVertical;
export { DotsVertical };
