import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AlignCenterHorizontalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AlignCenterHorizontal: ForwardRefExoticComponent<AlignCenterHorizontalProps & RefAttributes<SVGSVGElement>>;

export default AlignCenterHorizontal;
export { AlignCenterHorizontal };
