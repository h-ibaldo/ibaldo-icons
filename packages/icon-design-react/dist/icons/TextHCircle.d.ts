import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextHCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextHCircle: ForwardRefExoticComponent<TextHCircleProps & RefAttributes<SVGSVGElement>>;

export default TextHCircle;
export { TextHCircle };
