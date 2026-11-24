import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextA: ForwardRefExoticComponent<TextAProps & RefAttributes<SVGSVGElement>>;

export default TextA;
export { TextA };
