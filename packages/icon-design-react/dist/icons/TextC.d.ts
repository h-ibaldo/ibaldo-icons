import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextCProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextC: ForwardRefExoticComponent<TextCProps & RefAttributes<SVGSVGElement>>;

export default TextC;
export { TextC };
