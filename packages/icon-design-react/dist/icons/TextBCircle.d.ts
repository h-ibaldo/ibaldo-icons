import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextBCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextBCircle: ForwardRefExoticComponent<TextBCircleProps & RefAttributes<SVGSVGElement>>;

export default TextBCircle;
export { TextBCircle };
