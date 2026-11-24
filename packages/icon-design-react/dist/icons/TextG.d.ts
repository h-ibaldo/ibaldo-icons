import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextGProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextG: ForwardRefExoticComponent<TextGProps & RefAttributes<SVGSVGElement>>;

export default TextG;
export { TextG };
