import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextDCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextDCircle: ForwardRefExoticComponent<TextDCircleProps & RefAttributes<SVGSVGElement>>;

export default TextDCircle;
export { TextDCircle };
