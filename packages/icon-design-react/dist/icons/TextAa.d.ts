import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAaProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAa: ForwardRefExoticComponent<TextAaProps & RefAttributes<SVGSVGElement>>;

export default TextAa;
export { TextAa };
