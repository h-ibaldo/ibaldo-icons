import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface OnlineShopBrowserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const OnlineShopBrowser: ForwardRefExoticComponent<OnlineShopBrowserProps & RefAttributes<SVGSVGElement>>;

export default OnlineShopBrowser;
export { OnlineShopBrowser };
