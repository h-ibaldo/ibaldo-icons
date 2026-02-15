import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandCursorPointer3Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandCursorPointer3: ForwardRefExoticComponent<HandCursorPointer3Props & RefAttributes<SVGSVGElement>>;

export default HandCursorPointer3;
export { HandCursorPointer3 };
