import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandCursorPointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandCursorPointer: ForwardRefExoticComponent<HandCursorPointerProps & RefAttributes<SVGSVGElement>>;

export default HandCursorPointer;
export { HandCursorPointer };
