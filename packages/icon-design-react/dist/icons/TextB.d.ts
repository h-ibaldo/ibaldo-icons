import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextBProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextB: ForwardRefExoticComponent<TextBProps & RefAttributes<SVGSVGElement>>;

export default TextB;
export { TextB };
