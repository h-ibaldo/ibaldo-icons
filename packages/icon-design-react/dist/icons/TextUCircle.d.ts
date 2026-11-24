import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextUCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextUCircle: ForwardRefExoticComponent<TextUCircleProps & RefAttributes<SVGSVGElement>>;

export default TextUCircle;
export { TextUCircle };
