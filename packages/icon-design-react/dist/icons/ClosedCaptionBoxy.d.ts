import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClosedCaptionBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClosedCaptionBoxy: ForwardRefExoticComponent<ClosedCaptionBoxyProps & RefAttributes<SVGSVGElement>>;

export default ClosedCaptionBoxy;
export { ClosedCaptionBoxy };
