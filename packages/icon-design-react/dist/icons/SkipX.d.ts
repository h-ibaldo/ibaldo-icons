import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SkipXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SkipX: ForwardRefExoticComponent<SkipXProps & RefAttributes<SVGSVGElement>>;

export default SkipX;
export { SkipX };
