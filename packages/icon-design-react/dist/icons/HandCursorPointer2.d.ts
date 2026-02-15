import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandCursorPointer2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandCursorPointer2: ForwardRefExoticComponent<HandCursorPointer2Props & RefAttributes<SVGSVGElement>>;

export default HandCursorPointer2;
export { HandCursorPointer2 };
