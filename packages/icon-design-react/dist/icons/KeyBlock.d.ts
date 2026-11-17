import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface KeyBlockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const KeyBlock: ForwardRefExoticComponent<KeyBlockProps & RefAttributes<SVGSVGElement>>;

export default KeyBlock;
export { KeyBlock };
