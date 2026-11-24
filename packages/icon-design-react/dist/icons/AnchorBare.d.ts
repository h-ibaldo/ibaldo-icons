import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AnchorBareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AnchorBare: ForwardRefExoticComponent<AnchorBareProps & RefAttributes<SVGSVGElement>>;

export default AnchorBare;
export { AnchorBare };
