import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignCenterVerticalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignCenterVertical: ForwardRefExoticComponent<AlignCenterVerticalProps & RefAttributes<SVGSVGElement>>;

export default AlignCenterVertical;
export { AlignCenterVertical };
