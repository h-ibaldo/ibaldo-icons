import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextRProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextR: ForwardRefExoticComponent<TextRProps & RefAttributes<SVGSVGElement>>;

export default TextR;
export { TextR };
