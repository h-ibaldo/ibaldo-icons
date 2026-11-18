import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CursorLargeCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CursorLargeCircle: ForwardRefExoticComponent<CursorLargeCircleProps & RefAttributes<SVGSVGElement>>;

export default CursorLargeCircle;
export { CursorLargeCircle };
