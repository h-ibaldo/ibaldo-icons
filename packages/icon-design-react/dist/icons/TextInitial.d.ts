import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextInitialProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextInitial: ForwardRefExoticComponent<TextInitialProps & RefAttributes<SVGSVGElement>>;

export default TextInitial;
export { TextInitial };
