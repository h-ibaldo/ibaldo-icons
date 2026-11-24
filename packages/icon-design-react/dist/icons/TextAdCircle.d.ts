import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAdCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAdCircle: ForwardRefExoticComponent<TextAdCircleProps & RefAttributes<SVGSVGElement>>;

export default TextAdCircle;
export { TextAdCircle };
