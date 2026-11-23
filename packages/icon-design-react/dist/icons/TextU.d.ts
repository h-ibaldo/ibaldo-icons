import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextUProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextU: ForwardRefExoticComponent<TextUProps & RefAttributes<SVGSVGElement>>;

export default TextU;
export { TextU };
