import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextJProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextJ: ForwardRefExoticComponent<TextJProps & RefAttributes<SVGSVGElement>>;

export default TextJ;
export { TextJ };
