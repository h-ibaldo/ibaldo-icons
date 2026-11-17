import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyToothedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyToothed: ForwardRefExoticComponent<KeyToothedProps & RefAttributes<SVGSVGElement>>;

export default KeyToothed;
export { KeyToothed };
