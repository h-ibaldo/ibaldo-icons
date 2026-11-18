import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAppCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAppCircle: ForwardRefExoticComponent<TextAppCircleProps & RefAttributes<SVGSVGElement>>;

export default TextAppCircle;
export { TextAppCircle };
