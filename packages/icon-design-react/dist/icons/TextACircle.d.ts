import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextACircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextACircle: ForwardRefExoticComponent<TextACircleProps & RefAttributes<SVGSVGElement>>;

export default TextACircle;
export { TextACircle };
