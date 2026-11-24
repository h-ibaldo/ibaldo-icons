import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignCenterHorizontalSplitProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignCenterHorizontalSplit: ForwardRefExoticComponent<AlignCenterHorizontalSplitProps & RefAttributes<SVGSVGElement>>;

export default AlignCenterHorizontalSplit;
export { AlignCenterHorizontalSplit };
