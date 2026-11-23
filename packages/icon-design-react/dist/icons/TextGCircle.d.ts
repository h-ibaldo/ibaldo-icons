import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextGCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextGCircle: ForwardRefExoticComponent<TextGCircleProps & RefAttributes<SVGSVGElement>>;

export default TextGCircle;
export { TextGCircle };
