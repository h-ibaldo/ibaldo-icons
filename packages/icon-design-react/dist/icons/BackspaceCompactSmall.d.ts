import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BackspaceCompactSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BackspaceCompactSmall: ForwardRefExoticComponent<BackspaceCompactSmallProps & RefAttributes<SVGSVGElement>>;

export default BackspaceCompactSmall;
export { BackspaceCompactSmall };
