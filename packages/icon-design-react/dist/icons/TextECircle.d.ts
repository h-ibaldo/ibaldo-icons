import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextECircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextECircle: ForwardRefExoticComponent<TextECircleProps & RefAttributes<SVGSVGElement>>;

export default TextECircle;
export { TextECircle };
