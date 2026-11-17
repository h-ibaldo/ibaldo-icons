import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeypadGridProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeypadGrid: ForwardRefExoticComponent<KeypadGridProps & RefAttributes<SVGSVGElement>>;

export default KeypadGrid;
export { KeypadGrid };
