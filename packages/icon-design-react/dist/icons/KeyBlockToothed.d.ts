import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyBlockToothedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyBlockToothed: ForwardRefExoticComponent<KeyBlockToothedProps & RefAttributes<SVGSVGElement>>;

export default KeyBlockToothed;
export { KeyBlockToothed };
