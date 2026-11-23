import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextPProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextP: ForwardRefExoticComponent<TextPProps & RefAttributes<SVGSVGElement>>;

export default TextP;
export { TextP };
