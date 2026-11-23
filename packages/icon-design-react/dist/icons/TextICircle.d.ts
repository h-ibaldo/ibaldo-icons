import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextICircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextICircle: ForwardRefExoticComponent<TextICircleProps & RefAttributes<SVGSVGElement>>;

export default TextICircle;
export { TextICircle };
