import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SupportFaceProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SupportFace: ForwardRefExoticComponent<SupportFaceProps & RefAttributes<SVGSVGElement>>;

export default SupportFace;
export { SupportFace };
