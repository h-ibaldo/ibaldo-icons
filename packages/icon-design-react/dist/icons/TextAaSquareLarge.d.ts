import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAaSquareLargeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAaSquareLarge: ForwardRefExoticComponent<TextAaSquareLargeProps & RefAttributes<SVGSVGElement>>;

export default TextAaSquareLarge;
export { TextAaSquareLarge };
