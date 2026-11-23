import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextVCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextVCircle: ForwardRefExoticComponent<TextVCircleProps & RefAttributes<SVGSVGElement>>;

export default TextVCircle;
export { TextVCircle };
