import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandCursorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandCursor: ForwardRefExoticComponent<HandCursorProps & RefAttributes<SVGSVGElement>>;

export default HandCursor;
export { HandCursor };
