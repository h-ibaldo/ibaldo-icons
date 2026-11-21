import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PaperPlaneProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PaperPlane: ForwardRefExoticComponent<PaperPlaneProps & RefAttributes<SVGSVGElement>>;

export default PaperPlane;
export { PaperPlane };
