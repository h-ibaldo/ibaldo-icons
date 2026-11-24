import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextYCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextYCircle: ForwardRefExoticComponent<TextYCircleProps & RefAttributes<SVGSVGElement>>;

export default TextYCircle;
export { TextYCircle };
