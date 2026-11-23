import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScissorsDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScissorsDotted: ForwardRefExoticComponent<ScissorsDottedProps & RefAttributes<SVGSVGElement>>;

export default ScissorsDotted;
export { ScissorsDotted };
