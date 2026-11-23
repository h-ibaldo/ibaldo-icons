import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextZCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextZCircle: ForwardRefExoticComponent<TextZCircleProps & RefAttributes<SVGSVGElement>>;

export default TextZCircle;
export { TextZCircle };
