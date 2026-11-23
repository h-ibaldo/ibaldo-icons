import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextDProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextD: ForwardRefExoticComponent<TextDProps & RefAttributes<SVGSVGElement>>;

export default TextD;
export { TextD };
