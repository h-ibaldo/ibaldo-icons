import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextJCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextJCircle: ForwardRefExoticComponent<TextJCircleProps & RefAttributes<SVGSVGElement>>;

export default TextJCircle;
export { TextJCircle };
