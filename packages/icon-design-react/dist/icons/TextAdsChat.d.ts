import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TextAdsChatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TextAdsChat: ForwardRefExoticComponent<TextAdsChatProps & RefAttributes<SVGSVGElement>>;

export default TextAdsChat;
export { TextAdsChat };
