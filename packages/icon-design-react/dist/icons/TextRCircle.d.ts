import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextRCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextRCircle: ForwardRefExoticComponent<TextRCircleProps & RefAttributes<SVGSVGElement>>;

export default TextRCircle;
export { TextRCircle };
