import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScreenShareArrowsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScreenShareArrows: ForwardRefExoticComponent<ScreenShareArrowsProps & RefAttributes<SVGSVGElement>>;

export default ScreenShareArrows;
export { ScreenShareArrows };
