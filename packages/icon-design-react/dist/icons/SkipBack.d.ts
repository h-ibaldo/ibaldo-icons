import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipBackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipBack: ForwardRefExoticComponent<SkipBackProps & RefAttributes<SVGSVGElement>>;

export default SkipBack;
export { SkipBack };
