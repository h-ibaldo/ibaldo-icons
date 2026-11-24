import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextHollowProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextHollow: ForwardRefExoticComponent<TextHollowProps & RefAttributes<SVGSVGElement>>;

export default TextHollow;
export { TextHollow };
