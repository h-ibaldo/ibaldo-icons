import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignCenterVerticalSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignCenterVerticalSplit: ForwardRefExoticComponent<AlignCenterVerticalSplitProps & RefAttributes<SVGSVGElement>>;

export default AlignCenterVerticalSplit;
export { AlignCenterVerticalSplit };
