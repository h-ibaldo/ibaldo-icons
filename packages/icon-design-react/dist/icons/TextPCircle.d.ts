import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextPCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextPCircle: ForwardRefExoticComponent<TextPCircleProps & RefAttributes<SVGSVGElement>>;

export default TextPCircle;
export { TextPCircle };
