import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CodeXSmallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CodeXSmall: ForwardRefExoticComponent<CodeXSmallProps & RefAttributes<SVGSVGElement>>;

export default CodeXSmall;
export { CodeXSmall };
