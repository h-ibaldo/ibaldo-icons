import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextSCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextSCircle: ForwardRefExoticComponent<TextSCircleProps & RefAttributes<SVGSVGElement>>;

export default TextSCircle;
export { TextSCircle };
