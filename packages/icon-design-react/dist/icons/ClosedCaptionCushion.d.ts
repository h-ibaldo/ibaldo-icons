import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionCushionProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionCushion: ForwardRefExoticComponent<ClosedCaptionCushionProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionCushion;
export { ClosedCaptionCushion };
