import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface RssProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Rss: ForwardRefExoticComponent<RssProps & RefAttributes<SVGSVGElement>>;

export default Rss;
export { Rss };
