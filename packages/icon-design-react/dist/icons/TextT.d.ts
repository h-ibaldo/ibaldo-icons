import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextTProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextT: ForwardRefExoticComponent<TextTProps & RefAttributes<SVGSVGElement>>;

export default TextT;
export { TextT };
