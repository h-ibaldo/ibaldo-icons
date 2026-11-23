import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SpellCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SpellCheck: ForwardRefExoticComponent<SpellCheckProps & RefAttributes<SVGSVGElement>>;

export default SpellCheck;
export { SpellCheck };
