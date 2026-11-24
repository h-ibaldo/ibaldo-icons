import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperPlaneNotchProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperPlaneNotch: ForwardRefExoticComponent<PaperPlaneNotchProps & RefAttributes<SVGSVGElement>>;

export default PaperPlaneNotch;
export { PaperPlaneNotch };
