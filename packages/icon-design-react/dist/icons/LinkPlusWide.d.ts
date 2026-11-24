import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkPlusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkPlusWide: ForwardRefExoticComponent<LinkPlusWideProps & RefAttributes<SVGSVGElement>>;

export default LinkPlusWide;
export { LinkPlusWide };
