import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LinkBrokenBurstWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LinkBrokenBurstWide: ForwardRefExoticComponent<LinkBrokenBurstWideProps & RefAttributes<SVGSVGElement>>;

export default LinkBrokenBurstWide;
export { LinkBrokenBurstWide };
