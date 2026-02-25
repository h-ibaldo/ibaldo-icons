import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandCursorPointer32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandCursorPointer32: ForwardRefExoticComponent<HandCursorPointer32Props & RefAttributes<SVGSVGElement>>;

export default HandCursorPointer32;
export { HandCursorPointer32 };
