import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextLCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextLCircle: ForwardRefExoticComponent<TextLCircleProps & RefAttributes<SVGSVGElement>>;

export default TextLCircle;
export { TextLCircle };
