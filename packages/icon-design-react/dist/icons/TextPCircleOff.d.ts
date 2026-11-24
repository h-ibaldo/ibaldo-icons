import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextPCircleOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextPCircleOff: ForwardRefExoticComponent<TextPCircleOffProps & RefAttributes<SVGSVGElement>>;

export default TextPCircleOff;
export { TextPCircleOff };
