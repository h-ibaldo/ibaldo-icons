import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextMCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextMCircle: ForwardRefExoticComponent<TextMCircleProps & RefAttributes<SVGSVGElement>>;

export default TextMCircle;
export { TextMCircle };
