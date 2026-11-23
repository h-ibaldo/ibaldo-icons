import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextFProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextF: ForwardRefExoticComponent<TextFProps & RefAttributes<SVGSVGElement>>;

export default TextF;
export { TextF };
