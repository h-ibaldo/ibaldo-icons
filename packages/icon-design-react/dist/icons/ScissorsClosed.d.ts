import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ScissorsClosedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ScissorsClosed: ForwardRefExoticComponent<ScissorsClosedProps & RefAttributes<SVGSVGElement>>;

export default ScissorsClosed;
export { ScissorsClosed };
