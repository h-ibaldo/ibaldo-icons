import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserWindowMegaphoneAdvertisementProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserWindowMegaphoneAdvertisement: ForwardRefExoticComponent<BrowserWindowMegaphoneAdvertisementProps & RefAttributes<SVGSVGElement>>;

export default BrowserWindowMegaphoneAdvertisement;
export { BrowserWindowMegaphoneAdvertisement };
