import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextItalicXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextItalicX: ForwardRefExoticComponent<TextItalicXProps & RefAttributes<SVGSVGElement>>;

export default TextItalicX;
export { TextItalicX };
