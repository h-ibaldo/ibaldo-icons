import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WrenchHandOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WrenchHandOpen: ForwardRefExoticComponent<WrenchHandOpenProps & RefAttributes<SVGSVGElement>>;

export default WrenchHandOpen;
export { WrenchHandOpen };
