import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextSProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextS: ForwardRefExoticComponent<TextSProps & RefAttributes<SVGSVGElement>>;

export default TextS;
export { TextS };
