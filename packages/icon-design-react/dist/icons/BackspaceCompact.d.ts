import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BackspaceCompactProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BackspaceCompact: ForwardRefExoticComponent<BackspaceCompactProps & RefAttributes<SVGSVGElement>>;

export default BackspaceCompact;
export { BackspaceCompact };
