import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextPSquareOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextPSquareOff: ForwardRefExoticComponent<TextPSquareOffProps & RefAttributes<SVGSVGElement>>;

export default TextPSquareOff;
export { TextPSquareOff };
